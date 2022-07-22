<template>
  <div
    class="
            w-screen
            h-screen
            fixed
            p-8
            bg-black bg-opacity-75
            inset-0
            z-[200000]
            box-border
        "
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

function hide() {
    document.body.style.overflow = "visible";
    document.removeEventListener("keydown", keyDownListener);
    emit("close");
}

const iframeElement = ref(null);

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

function keyDownListener($event) {
    if ($event.keyCode === 27) {
        hide();
    }
}

onMounted(() => create());
</script>
