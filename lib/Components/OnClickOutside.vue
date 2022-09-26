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
    opened: {
        type: Boolean,
        required: true,
    },
    closeOnEscape: {
        type: Boolean,
        required: false,
        default: true
    }
});

const listener = ref(null);
const root = ref(null);
const closeOnEscapeHandler = ref(null);

onMounted(() => {
    listener.value = (e) => {
        if (e.target === root.value || root.value.contains(e.target)) {
            return;
        }

        props.do();
    };

    // Listen to the click and touchstart events to determine
    // whether the 'do' callback should be called.
    document.addEventListener("click", listener.value);
    document.addEventListener("touchstart", listener.value);

    if(props.closeOnEscape) {
        closeOnEscapeHandler.value = (e) => {
            if (props.opened && e.key === "Escape") {
                props.do();
            }
        };

        // Listen to the keydown event and whether the used pressed Escape.
        document.addEventListener("keydown", closeOnEscapeHandler.value);
    }
});

/*
 * Remove the attached event listeners.
 */
onBeforeUnmount(() => {
    document.removeEventListener("click", listener.value);
    document.removeEventListener("touchstart", listener.value);

    if(props.closeOnEscape) {
        document.removeEventListener("keydown", closeOnEscapeHandler.value);
    }
});
</script>