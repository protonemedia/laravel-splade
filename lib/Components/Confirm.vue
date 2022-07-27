<script>
import {
    Dialog,
    DialogPanel,
    TransitionRoot,
    TransitionChild,
} from "@headlessui/vue";

import { Splade } from "../Splade.js";

export default {
    props: {
        defaultTitle: {
            type: String,
            required: false,
            default: "",
        },
        defaultText: {
            type: String,
            required: false,
            default: "",
        },
        defaultConfirmButton: {
            type: String,
            required: false,
            default: "",
        },
        defaultCancelButton: {
            type: String,
            required: false,
            default: "",
        },
    },

    data() {
        return {
            isOpen: false,
        };
    },

    computed: {
        hasConfirmModal: () => {
            return Splade.confirmModal.value ? true : false;
        },

        title: function () {
            return Splade.confirmModal.value?.title
                ? Splade.confirmModal.value.title
                : this.defaultTitle;
        },

        text: function () {
            return Splade.confirmModal.value?.text
                ? Splade.confirmModal.value.text
                : this.defaultText;
        },

        confirmButton: function () {
            return Splade.confirmModal.value?.confirmButton
                ? Splade.confirmModal.value.confirmButton
                : this.defaultConfirmButton;
        },

        cancelButton: function () {
            return Splade.confirmModal.value?.cancelButton
                ? Splade.confirmModal.value.cancelButton
                : this.defaultCancelButton;
        },
    },

    watch: {
        hasConfirmModal(value) {
            if (value) {
                this.isOpen = true;
            }
        },
    },

    methods: {
        cancel() {
            Splade.confirmModal.value.rejectPromise();
            this.setIsOpen(false);
        },

        confirm() {
            Splade.confirmModal.value.resolvePromise();
            this.setIsOpen(false);
        },

        setIsOpen(value) {
            this.isOpen = value;
        },

        emitClose() {
            Splade.clearConfirmModal();
        },
    },

    render() {
        return this.$slots.default({
            title: this.title,
            text: this.text,
            confirmButton: this.confirmButton,
            cancelButton: this.cancelButton,

            isOpen: this.isOpen,
            setIsOpen: this.setIsOpen,
            cancel: this.cancel,
            confirm: this.confirm,
            emitClose: this.emitClose,

            Dialog,
            DialogPanel,
            TransitionRoot,
            TransitionChild,
        });
    },
};
</script>
