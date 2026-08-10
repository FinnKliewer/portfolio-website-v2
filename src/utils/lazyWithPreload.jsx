// lazyWithPreload.js
import React from 'react';

export function lazyWithPreload(factory) {
    let modulePromise;
    const load = () => {
        modulePromise ??= factory();
        return modulePromise;
    };

    const Component = React.lazy(load);
    Component.preload = load;
    return Component;
}
