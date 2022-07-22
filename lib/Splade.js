import SpladeCore from "./SpladeCore.vue";
import { createApp } from "vue";

const tempDiv = document.createElement("div");
const Splade = createApp(SpladeCore).mount(tempDiv);

export { Splade }