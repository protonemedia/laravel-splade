<template>
  <a
    :href="href"
    @click.prevent="navigate"
  ><slot /></a>
</template>

<script setup>
import { inject } from "vue";
import { objectToFormData } from "./FormHelpers.js";
import { Splade } from "./../Splade.js";
import isBoolean from "lodash-es/isBoolean";
import startsWith from "lodash-es/startsWith";

const stack = inject("stack");

const props = defineProps({
    href: {
        type: String,
        required: false,
        default: "#"
    },

    method: {
        type: String,
        required: false,
        default: "GET",
    },

    data: {
        type: Object,
        required: false,
        default: () => {
            return {};
        },
    },

    headers: {
        type: Object,
        required: false,
        default: () => {
            return { Accept: "application/json" };
        },
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

    away: {
        type: Boolean,
        required: false,
        default: false,
    },

    keepModal: {
        type: Boolean,
        required: false,
        default: false,
    },

    preserveScroll: {
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
    if (props.away) {
        return window.location = props.href;
    }

    const currentlyInModal = stack > 0;
    const stayInModal = currentlyInModal && props.keepModal;

    if (props.modal && !stayInModal) {
        return Splade.modal(props.href);
    }

    if (props.slideover && !stayInModal) {
        return Splade.slideover(props.href);
    }

    if(startsWith(props.href, "#")) {
        if(Splade.openPreloadedModal(props.href.substring(1))) {
            return;
        }

        console.log("No preloaded modal found for " + props.href);
    }

    let method = props.method.trim().toUpperCase();

    const headers = {
        ...props.headers,
    };

    if(stayInModal) {
        headers["X-Splade-Modal"] = Splade.stackType(stack);
        headers["X-Splade-Modal-Target"] = stack;
    }

    if(props.preserveScroll) {
        headers["X-Splade-Preserve-Scroll"] = true;
    }

    if(method === "GET") {
        return props.replace ? Splade.replace(props.href, headers) : Splade.visit(props.href, headers);
    }

    const data = (props.data instanceof FormData)
        ? props.data
        : objectToFormData(props.data);

    if(method !== "POST") {
        data.append("_method", method);
        method = "POST";
    }

    Splade.request(props.href, method, data, headers, props.replace);
}
</script>