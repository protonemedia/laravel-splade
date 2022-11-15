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
});

import { Splade } from "./../Splade.js";

Splade.registerPreloadedModal(props.name, props.html, props.type);
</script>