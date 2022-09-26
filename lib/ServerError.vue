<template>
  <div
    style="position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index: 200000; box-sizing: border-box; height: 100vh; width: 100vw; background-color: rgb(0 0 0 / 0.75); padding: 2rem;"
    @click="hide"
  >
    <iframe
      ref="iframeElement"
      class="bg-white w-full h-full"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
    html: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(["close"]);
const iframeElement = ref(null);

/**
 * Creates a new HTML element with an iframe holding the HTML from the props.
 */
function create() {
    const page = document.createElement("html");
    page.innerHTML = props.html;
    page.querySelectorAll("a").forEach((a) => a.setAttribute("target", "_top"));

    document.body.style.overflow = "hidden";

    const iframe = iframeElement.value;

    if (!iframe.contentWindow) {
        throw new Error("iframe not yet ready.");
    }

    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(page.outerHTML);
    iframe.contentWindow.document.close();

    document.addEventListener("keydown", keyDownListener);
}

/**
 * Calls the hide() event when the keycode is escape.
 */
function keyDownListener($event) {
    if ($event.keyCode === 27) {
        hide();
    }
}

/**
 * Restore the body overflow style and emit the 'close' event.
 */
function hide() {
    document.body.style.overflow = "visible";
    document.removeEventListener("keydown", keyDownListener);
    emit("close");
}

onMounted(() => create());
</script>
