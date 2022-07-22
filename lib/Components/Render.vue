<template>
  <render />
</template>

<script setup>
import { compile, h, ref, watch } from "vue";

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
        render: compile(props.html),
    });
}

watch(() => props.html, updateRender, { immediate: true });
</script>