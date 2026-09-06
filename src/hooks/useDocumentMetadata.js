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

const updateLink = (selector, attributes, href) => {
    const existingElement = document.head.querySelector(selector);
    const element = existingElement || document.createElement("link");
    const previousHref = existingElement?.getAttribute("href");

    if (!existingElement) {
        Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
        document.head.appendChild(element);
    }

    element.setAttribute("href", href);

    return () => {
        if (!existingElement) {
            element.remove();
        } else if (previousHref === null) {
            element.removeAttribute("href");
        } else {
            element.setAttribute("href", previousHref);
        }
    };
};

export const useDocumentMetadata = ({ title, description, openGraphTitle }) => {
    useEffect(() => {
        const previousTitle = document.title;
        const restoreMetadata = [];
        const pathname = window.location.pathname === "/home" ? "/" : window.location.pathname;
        const canonicalUrl = new URL(pathname, "https://www.finnkliewer.com/").href;
        const socialTitle = openGraphTitle || title;

        document.title = title;

        if (description) {
            restoreMetadata.push(updateMeta(
                'meta[name="description"]',
                { name: "description" },
                description,
            ));
        }

        restoreMetadata.push(updateMeta(
            'meta[property="og:title"]',
            { property: "og:title" },
            socialTitle,
        ));
        restoreMetadata.push(updateMeta(
            'meta[name="twitter:title"]',
            { name: "twitter:title" },
            socialTitle,
        ));

        if (description) {
            restoreMetadata.push(updateMeta(
                'meta[property="og:description"]',
                { property: "og:description" },
                description,
            ));
            restoreMetadata.push(updateMeta(
                'meta[name="twitter:description"]',
                { name: "twitter:description" },
                description,
            ));
        }

        restoreMetadata.push(updateMeta(
            'meta[property="og:url"]',
            { property: "og:url" },
            canonicalUrl,
        ));
        restoreMetadata.push(updateLink(
            'link[rel="canonical"]',
            { rel: "canonical" },
            canonicalUrl,
        ));
        restoreMetadata.push(updateLink(
            'link[rel="alternate"][hreflang="en"]',
            { rel: "alternate", hreflang: "en" },
            canonicalUrl,
        ));

        return () => {
            document.title = previousTitle;
            restoreMetadata.forEach((restore) => restore());
        };
    }, [description, openGraphTitle, title]);
};
