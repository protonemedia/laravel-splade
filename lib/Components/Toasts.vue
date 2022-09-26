<script>
import { TransitionRoot, TransitionChild } from "@headlessui/vue";
import { Splade } from "../Splade.js";
import Render from "./Render.vue";

const positions = [
    "left-top",
    "center-top",
    "right-top",
    "left-center",
    "center-center",
    "right-center",
    "left-bottom",
    "center-bottom",
    "right-bottom",
];

export default {
    computed: {
        /*
         * Retrieves the toasts from the Splade instance.
         */
        toasts: function () {
            return Splade.toastsReversed.value;
        },

        /*
         * Determine whether a backdrop should be shown.
         */
        hasBackdrop: function () {
            return (
                Splade.toasts.value.filter((toast) => {
                    return !toast.dismissed && toast.backdrop && toast.html;
                }).length > 0
            );
        },
    },

    methods: {
        dismissToast(key) {
            Splade.dismissToast(key);
        },
    },

    render() {
        return this.$slots.default({
            positions,
            toasts: this.toasts,
            dismissToast: this.dismissToast,
            hasBackdrop: this.hasBackdrop,
            Render,

            // These HeadlessUI exports will be removed in v1.0
            TransitionRoot,
            TransitionChild,
        });
    },
};
</script>