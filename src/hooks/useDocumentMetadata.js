import { useEffect } from "react";

const updateMeta = (selector, attributes, content) => {
    const existingElement = document.head.querySelector(selector);
    const element = existingElement || document.createElement("meta");
    const previousContent = existingElement?.getAttribute("content");

    if (!existingElement) {
        Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
        document.head.appendChild(element);
    }

    element.setAttribute("content", content);

    return () => {
        if (!existingElement) {
            element.remove();
        } else if (previousContent === null) {
            element.removeAttribute("content");
        } else {
            element.setAttribute("content", previousContent);
        }
    };
};

export const useDocumentMetadata = ({ title, description, openGraphTitle }) => {
    useEffect(() => {
        const previousTitle = document.title;
        const restoreMetadata = [];

        document.title = title;

        if (description) {
            restoreMetadata.push(updateMeta(
                'meta[name="description"]',
                { name: "description" },
                description,
            ));
        }

        if (openGraphTitle) {
            restoreMetadata.push(updateMeta(
                'meta[property="og:title"]',
                { property: "og:title" },
                openGraphTitle,
            ));
        }

        return () => {
            document.title = previousTitle;
            restoreMetadata.forEach((restore) => restore());
        };
    }, [description, openGraphTitle, title]);
};
