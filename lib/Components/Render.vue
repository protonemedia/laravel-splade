<template>
  <render v-if="html" />
</template>

<script setup>
import { h, ref, watch } from "vue";

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
}

watch(() => props.html, updateRender, { immediate: true });
</script>