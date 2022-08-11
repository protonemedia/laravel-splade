<template>
  <div ref="root">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
    do: {
        type: Function,
        required: true,
    },
});

const listener = ref(null);
const root = ref(null);

onMounted(() => {
    listener.value = (e) => {
        if (e.target === root.value || root.value.contains(e.target)) {
            return;
        }

        props.do();
    };

    document.addEventListener("click", listener.value);
    document.addEventListener("touchstart", listener.value);
});

onBeforeUnmount(() => {
    document.removeEventListener("click", listener.value);
    document.removeEventListener("touchstart", listener.value);
});
</script>