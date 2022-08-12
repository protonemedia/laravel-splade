import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],

    build: {
        lib: {
            entry: resolve(__dirname, "lib/main.js"),
            name: "ProtoneMediaLaravelSplade",
            fileName: "protone-media-laravel-splade"
        },
        rollupOptions: {
            external: ["vue", "axios"],
            output: {
                globals: {
                    axios: "axios",
                    vue: "Vue"
                }
            }
        }
    }
});
