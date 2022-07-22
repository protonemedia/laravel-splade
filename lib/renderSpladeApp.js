import { h } from "vue"
import SpladeApp from "./SpladeApp.vue"

export default function render(props) {
    return () => {
        return h(SpladeApp, props)
    };
}