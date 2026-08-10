import { useCallback, useEffect, useSyncExternalStore } from "react";

let activeRequest = null;
let hasAttempted = false;
let snapshot = {
    projects: [],
    isLoading: false,
    hasError: false,
};

const listeners = new Set();
const emitChange = () => listeners.forEach((listener) => listener());
const getSnapshot = () => snapshot;
const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
};

const setSnapshot = (nextSnapshot) => {
    snapshot = nextSnapshot;
    emitChange();
};

export const preloadRepositoryProjects = ({ force = false } = {}) => {
    if (activeRequest) return activeRequest;
    if (hasAttempted && !force) return Promise.resolve(snapshot.projects);

    const configuredApiUrl = import.meta.env.VITE_API_URL || import.meta.env.REACT_APP_API_URL;
    const baseUrl = configuredApiUrl ? configuredApiUrl.replace(/\/$/, "") : "";

    setSnapshot({
        projects: force ? [] : snapshot.projects,
        isLoading: true,
        hasError: false,
    });
    hasAttempted = true;

    activeRequest = fetch(`${baseUrl}/api/repos`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((projects) => {
            if (!Array.isArray(projects)) {
                throw new Error("Repository response was not an array.");
            }

            setSnapshot({ projects, isLoading: false, hasError: false });
            return projects;
        })
        .catch((error) => {
            console.error("Error fetching repo data:", error);
            setSnapshot({ projects: [], isLoading: false, hasError: true });
            return [];
        })
        .finally(() => {
            activeRequest = null;
        });

    return activeRequest;
};

export const useRepositoryProjects = () => {
    const repositoryState = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

    useEffect(() => {
        preloadRepositoryProjects();
    }, []);

    const retry = useCallback(() => {
        preloadRepositoryProjects({ force: true });
    }, []);

    return { ...repositoryState, retry };
};
