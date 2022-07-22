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
        toasts: function () {
            return Splade.toastsReversed;
        },

        hasBackdrop: function () {
            return (
                Splade.toasts.filter((toast) => {
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
            TransitionRoot,
            TransitionChild,
        });
    },
};
</script>