import { h } from "vue";
import SpladeApp from "./SpladeApp.vue";

/**
 * A little helper function to render the SpladeApp in the main app.js file.
 */
export default function render(props) {
    return () => {
        return h(SpladeApp, props);
    };
}