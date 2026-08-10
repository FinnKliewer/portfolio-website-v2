const CELL_OFFSET = 512;
const CELL_STRIDE = 1024;
const CELL_PLANE = CELL_STRIDE * CELL_STRIDE;

const encodeCell = (x, y, z) => (
    (x + CELL_OFFSET) * CELL_PLANE
    + (y + CELL_OFFSET) * CELL_STRIDE
    + z + CELL_OFFSET
);

const colorBrightness = (color) => 0.299 * color.r + 0.587 * color.g + 0.114 * color.b;

const forwardNeighborOffsets = [];
for (let x = -1; x <= 1; x += 1) {
    for (let y = -1; y <= 1; y += 1) {
        for (let z = -1; z <= 1; z += 1) {
            if (x > 0 || (x === 0 && y > 0) || (x === 0 && y === 0 && z >= 0)) {
                forwardNeighborOffsets.push([x, y, z]);
            }
        }
    }
}

export const optimizeVantaNet = (effect, THREE) => {
    if (!effect?.points?.length || !effect.cont || !THREE.InstancedMesh) return effect;

    const points = effect.points;
    const pointCount = points.length;
    const dotGeometry = new THREE.SphereGeometry(0.25, 12, 12);
    const dotMaterial = new THREE.MeshLambertMaterial({ color: effect.options.color });
    const instancedDots = new THREE.InstancedMesh(dotGeometry, dotMaterial, pointCount);
    instancedDots.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    instancedDots.frustumCulled = false;

    const rotationCosines = new Float64Array(pointCount);
    const rotationSines = new Float64Array(pointCount);
    const originalRadii = new Float64Array(pointCount);
    const cellX = new Int16Array(pointCount);
    const cellY = new Int16Array(pointCount);
    const cellZ = new Int16Array(pointCount);

    points.forEach((point, index) => {
        const rotation = 0.00025 * point.r;
        rotationCosines[index] = Math.cos(rotation);
        rotationSines[index] = Math.sin(rotation);
        originalRadii[index] = Math.sqrt(
            point.position.x * point.position.x
            + point.position.z * point.position.z,
        );

        point.updateMatrix();
        instancedDots.setMatrixAt(index, point.matrix);
        effect.cont.remove(point);
        point.geometry?.dispose();
        point.material?.dispose();
    });

    instancedDots.instanceMatrix.needsUpdate = true;
    effect.cont.add(instancedDots);

    const cameraTarget = new THREE.Vector3(0, 0, 0);
    const mousePosition = new THREE.Vector2();
    const viewProjectionMatrix = new THREE.Matrix4();
    const visibilityFrustum = new THREE.Frustum();
    const visibilitySphere = new THREE.Sphere();
    const background = new THREE.Color(effect.options.backgroundColor);
    const foreground = new THREE.Color(effect.options.color);
    const colorDelta = foreground.clone().sub(background);
    const maxDistance = effect.options.maxDistance;
    const maxDistanceSquared = maxDistance * maxDistance;
    const spatialGrid = new Map();
    const bucketPool = [];
    let renderedFrames = 0;
    let additive = effect.blending === "additive";

    effect.setThemeColors = ({ backgroundColor, color }) => {
        effect.options.backgroundColor = backgroundColor;
        effect.options.color = color;
        background.set(backgroundColor);
        foreground.set(color);
        colorDelta.copy(foreground).sub(background);
        additive = colorBrightness(foreground) > colorBrightness(background);
        effect.blending = additive ? "additive" : "subtractive";
        dotMaterial.color.set(color);
        effect.linesMesh.material.blending = additive
            ? THREE.AdditiveBlending
            : THREE.NormalBlending;
        effect.renderer.setClearColor(backgroundColor, effect.options.backgroundAlpha);
    };

    effect.onUpdate = () => {
        const camera = effect.camera;
        let cameraDifference;

        if (Math.abs(camera.tx - camera.position.x) > 0.01) {
            cameraDifference = camera.tx - camera.position.x;
            camera.position.x += cameraDifference * 0.02;
        }
        if (Math.abs(camera.ty - camera.position.y) > 0.01) {
            cameraDifference = camera.ty - camera.position.y;
            camera.position.y += cameraDifference * 0.02;
        }
        camera.lookAt(cameraTarget);
        camera.updateMatrixWorld();
        viewProjectionMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
        visibilityFrustum.setFromProjectionMatrix(viewProjectionMatrix);

        if (effect.rayCaster) {
            mousePosition.set(effect.rcMouseX, effect.rcMouseY);
            effect.rayCaster.setFromCamera(mousePosition, camera);
        }

        spatialGrid.clear();
        let activeBucketCount = 0;
        renderedFrames += 1;
        const shouldNormalizeRadius = renderedFrames % 3600 === 0;
        let visiblePointCount = 0;

        for (let index = 0; index < pointCount; index += 1) {
            const point = points[index];

            if (effect.rayCaster) {
                const distanceToMouse = effect.rayCaster.ray.distanceToPoint(point.position);
                const clampedDistance = Math.min(Math.max(distanceToMouse, 5), 15);
                const pointScale = Math.max((15 - clampedDistance) * 0.25, 1);
                point.scale.set(pointScale, pointScale, pointScale);
            }

            if (point.r !== 0) {
                const previousX = point.position.x;
                const previousZ = point.position.z;
                point.position.x = previousX * rotationCosines[index] - previousZ * rotationSines[index];
                point.position.z = previousZ * rotationCosines[index] + previousX * rotationSines[index];

                if (shouldNormalizeRadius) {
                    const currentRadius = Math.sqrt(
                        point.position.x * point.position.x
                        + point.position.z * point.position.z,
                    );
                    const radiusCorrection = originalRadii[index] / currentRadius;
                    point.position.x *= radiusCorrection;
                    point.position.z *= radiusCorrection;
                }
            }

            visibilitySphere.center.copy(point.position);
            visibilitySphere.radius = 0.25 * point.scale.x;
            if (visibilityFrustum.intersectsSphere(visibilitySphere)) {
                point.updateMatrix();
                instancedDots.setMatrixAt(visiblePointCount, point.matrix);
                visiblePointCount += 1;
            }

            const x = Math.floor(point.position.x / maxDistance);
            const y = Math.floor(point.position.y / maxDistance);
            const z = Math.floor(point.position.z / maxDistance);
            cellX[index] = x;
            cellY[index] = y;
            cellZ[index] = z;

            const cellKey = encodeCell(x, y, z);
            let bucket = spatialGrid.get(cellKey);
            if (!bucket) {
                bucket = bucketPool[activeBucketCount] || [];
                bucket.length = 0;
                bucketPool[activeBucketCount] = bucket;
                activeBucketCount += 1;
                spatialGrid.set(cellKey, bucket);
            }
            bucket.push(index);
        }

        instancedDots.count = visiblePointCount;
        instancedDots.instanceMatrix.updateRange.offset = 0;
        instancedDots.instanceMatrix.updateRange.count = visiblePointCount * 16;
        instancedDots.instanceMatrix.needsUpdate = true;

        let vertexPosition = 0;
        let colorPosition = 0;
        let connectedLines = 0;
        const linePositions = effect.linePositions;
        const lineColors = effect.lineColors;

        for (let index = 0; index < pointCount; index += 1) {
            const point = points[index];

            for (let offsetIndex = 0; offsetIndex < forwardNeighborOffsets.length; offsetIndex += 1) {
                const [offsetX, offsetY, offsetZ] = forwardNeighborOffsets[offsetIndex];
                const bucket = spatialGrid.get(encodeCell(
                    cellX[index] + offsetX,
                    cellY[index] + offsetY,
                    cellZ[index] + offsetZ,
                ));
                if (!bucket) continue;

                for (let bucketIndex = 0; bucketIndex < bucket.length; bucketIndex += 1) {
                    const comparisonIndex = bucket[bucketIndex];
                    if (offsetIndex === 0 && comparisonIndex <= index) continue;

                    const comparisonPoint = points[comparisonIndex];
                    const xDifference = point.position.x - comparisonPoint.position.x;
                    const yDifference = point.position.y - comparisonPoint.position.y;
                    const zDifference = point.position.z - comparisonPoint.position.z;
                    const distanceSquared = (
                        xDifference * xDifference
                        + yDifference * yDifference
                        + zDifference * zDifference
                    );
                    if (distanceSquared >= maxDistanceSquared) continue;

                    const distance = Math.sqrt(distanceSquared);
                    const alpha = Math.min((1 - distance / maxDistance) * 2, 1);
                    const red = additive
                        ? colorDelta.r * alpha
                        : background.r + (foreground.r - background.r) * alpha;
                    const green = additive
                        ? colorDelta.g * alpha
                        : background.g + (foreground.g - background.g) * alpha;
                    const blue = additive
                        ? colorDelta.b * alpha
                        : background.b + (foreground.b - background.b) * alpha;

                    linePositions[vertexPosition] = point.position.x;
                    linePositions[vertexPosition + 1] = point.position.y;
                    linePositions[vertexPosition + 2] = point.position.z;
                    linePositions[vertexPosition + 3] = comparisonPoint.position.x;
                    linePositions[vertexPosition + 4] = comparisonPoint.position.y;
                    linePositions[vertexPosition + 5] = comparisonPoint.position.z;
                    vertexPosition += 6;

                    lineColors[colorPosition] = red;
                    lineColors[colorPosition + 1] = green;
                    lineColors[colorPosition + 2] = blue;
                    lineColors[colorPosition + 3] = red;
                    lineColors[colorPosition + 4] = green;
                    lineColors[colorPosition + 5] = blue;
                    colorPosition += 6;
                    connectedLines += 1;
                }
            }
        }

        effect.linesMesh.geometry.setDrawRange(0, connectedLines * 2);
        const positionAttribute = effect.linesMesh.geometry.attributes.position;
        const colorAttribute = effect.linesMesh.geometry.attributes.color;
        positionAttribute.updateRange.offset = 0;
        positionAttribute.updateRange.count = vertexPosition;
        colorAttribute.updateRange.offset = 0;
        colorAttribute.updateRange.count = colorPosition;
        positionAttribute.needsUpdate = true;
        colorAttribute.needsUpdate = true;

        return effect.t * 0.001;
    };

    return effect;
};
