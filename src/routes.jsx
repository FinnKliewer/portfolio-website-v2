import Home, { preloadHomeScene } from "./pages/Home";
import { preloadRepositoryProjects } from "./hooks/useRepositoryProjects";
import { lazyWithPreload } from "./utils/lazyWithPreload";

const ProfessionalHistory = lazyWithPreload(() => import("./pages/ProfessionalHistory"));
const GitHubProjects = lazyWithPreload(() => import("./pages/GitHubProjects"));
const Contact = lazyWithPreload(() => import("./pages/Contact"));
const NotFound = lazyWithPreload(() => import("./pages/404NotFound"));

export const pageRoutes = [
    { path: "/", Component: Home },
    { path: "/home", Component: Home },
    { path: "/professional-history", Component: ProfessionalHistory },
    { path: "/github-projects", Component: GitHubProjects },
    { path: "/contact", Component: Contact },
    { path: "*", Component: NotFound },
];

const normalizePath = (path) => {
    if (path === "/home") return "/";
    if (path.length > 1) return path.replace(/\/$/, "");
    return path;
};

const componentPreloaders = {
    "/professional-history": ProfessionalHistory.preload,
    "/github-projects": GitHubProjects.preload,
    "/contact": Contact.preload,
};

export const preloadInitialRoute = (path) => {
    const normalizedPath = normalizePath(path);
    if (normalizedPath === "/") return undefined;
    if (normalizedPath === "/github-projects") {
        return Promise.allSettled([
            GitHubProjects.preload(),
            preloadRepositoryProjects(),
        ]);
    }

    return componentPreloaders[normalizedPath]?.() || NotFound.preload();
};

export const preloadRoute = (path) => {
    const normalizedPath = normalizePath(path);
    const tasks = [];

    if (normalizedPath === "/") tasks.push(preloadHomeScene());
    if (componentPreloaders[normalizedPath]) tasks.push(componentPreloaders[normalizedPath]());
    if (normalizedPath === "/github-projects") tasks.push(preloadRepositoryProjects());

    return Promise.allSettled(tasks);
};

export const scheduleIdleRoutePreload = () => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || "")) {
        return () => undefined;
    }

    const preload = () => {
        Promise.allSettled([
            ProfessionalHistory.preload(),
            GitHubProjects.preload(),
            Contact.preload(),
        ]);
    };

    let idleCallback;
    const timeout = window.setTimeout(() => {
        if ("requestIdleCallback" in window) {
            idleCallback = window.requestIdleCallback(preload, { timeout: 2000 });
        } else {
            preload();
        }
    }, 1200);

    return () => {
        window.clearTimeout(timeout);
        if (idleCallback !== undefined) window.cancelIdleCallback(idleCallback);
    };
};
