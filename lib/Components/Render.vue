<template>
  <render v-if="html" />
</template>

<script setup>
import { h, ref, watch, nextTick } from "vue";
import { Splade } from "../Splade.js";

const props = defineProps({
    html: {
        type: String,
        required: false,
        default: "",
    },

    passthrough: {
        type: Object,
        required: false,
        default() {
            return {};
        },
    },
});

const render = ref(null);

function updateRender() {
    render.value = h({
        template: props.html,
        data() {
            return { ...props.passthrough };
        },
    });

    nextTick(() => {
        Splade.emit("rendered");
    });
}

watch(() => props.html, updateRender, { immediate: true });
</script>