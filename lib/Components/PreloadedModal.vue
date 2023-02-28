<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },

    html: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        required: false,
        default: "modal"
    },

    opened: {
        type: Boolean,
        required: false,
        default: false,
    },
});

import { Splade } from "./../Splade.js";

Splade.registerPreloadedModal(props.name, props.html, props.type);

if(props.opened) {
    Splade.openPreloadedModal(props.name);
}
</script>