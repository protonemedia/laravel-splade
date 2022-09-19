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
});

const render = ref(null);

function updateRender() {
    render.value = h({
        template: props.html
    });
}

watch(() => props.html, updateRender, { immediate: true });
</script>