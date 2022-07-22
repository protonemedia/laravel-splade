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
            return Splade.confirmModal ? true : false;
        },

        title: function () {
            return Splade.confirmModal?.title
                ? Splade.confirmModal.title
                : this.defaultTitle;
        },

        text: function () {
            return Splade.confirmModal?.text
                ? Splade.confirmModal.text
                : this.defaultText;
        },

        confirmButton: function () {
            return Splade.confirmModal?.confirmButton
                ? Splade.confirmModal.confirmButton
                : this.defaultConfirmButton;
        },

        cancelButton: function () {
            return Splade.confirmModal?.cancelButton
                ? Splade.confirmModal.cancelButton
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
            Splade.confirmModal.rejectPromise();
            this.setIsOpen(false);
        },

        confirm() {
            Splade.confirmModal.resolvePromise();
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
