import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [react(), svgr()],
    envPrefix: ["VITE_", "REACT_APP_"],
    server: {
        port: 3000,
        proxy: {
            "/api": {
                target: "http://localhost:5000",
                changeOrigin: true,
            },
        },
    },
    build: {
        outDir: "build",
    },
});
