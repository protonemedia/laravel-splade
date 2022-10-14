<template>
  <a
    :href="href"
    @click.prevent="navigate"
  ><slot /></a>
</template>

<script setup>
import { Splade } from "./../Splade.js";
import isBoolean from "lodash-es/isBoolean";

const props = defineProps({
    href: {
        type: String,
        required: true,
    },

    replace: {
        type: Boolean,
        required: false,
        default: false,
    },

    confirm: {
        type: [Boolean, String],
        required: false,
        default: false,
    },

    confirmText: {
        type: String,
        required: false,
        default: "",
    },

    confirmButton: {
        type: String,
        required: false,
        default: "",
    },

    cancelButton: {
        type: String,
        required: false,
        default: "",
    },

    modal: {
        type: Boolean,
        required: false,
        default: false,
    },

    slideover: {
        type: Boolean,
        required: false,
        default: false,
    },
});

/*
 * If a confirmation is needed, it first shows the
 * confirmation dialog and waits for the promise
 * before it performs the visit.
 */
function navigate() {
    if (!props.confirm) {
        return perform();
    }

    Splade.confirm(
        isBoolean(props.confirm) ? "" : props.confirm,
        props.confirmText,
        props.confirmButton,
        props.cancelButton
    )
        .then(() => {
            perform();
        })
        .catch(() => {});
}

/*
 * Calls the modal/slideover or replace/visit method on the Splade instance.
 */
function perform() {
    if (props.modal) {
        return Splade.modal(props.href);
    }

    if (props.slideover) {
        return Splade.slideover(props.href);
    }

    props.replace ? Splade.replace(props.href) : Splade.visit(props.href);
}
</script>