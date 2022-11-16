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
            external: [
                "vue",
                "axios",
                "autosize",
                "choices.js",
                "flatpickr",
                "nprogress",
                "filepond",
                "filepond-plugin-file-validate-size",
                "filepond-plugin-file-validate-type",
                "filepond-plugin-image-exif-orientation",
                "filepond-plugin-image-preview",
                "filepond-plugin-image-validate-size",
            ],
            output: {
                globals: {
                    axios: "axios",
                    vue: "Vue",
                    autosize: "autosize",
                    "choices.js": "Choices",
                    "nprogress": "NProgress",
                    "filepond": "FilePond",
                    "filepond-plugin-file-validate-size": "FilePondPluginFileValidateSize",
                    "filepond-plugin-file-validate-type": "FilePondPluginFileValidateType",
                    "filepond-plugin-image-exif-orientation": "FilePondPluginImageExifOrientation",
                    "filepond-plugin-image-preview": "FilePondPluginImagePreview",
                    "filepond-plugin-image-validate-size": "FilePondPluginImageValidateSize"
                },
            }
        }
    }
});
