<script>
import {
    Dialog,
    DialogPanel,
    TransitionRoot,
    TransitionChild,
} from "@headlessui/vue";
import { Splade } from "../Splade.js";
import { default as Axios } from "axios";

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
        defaultPasswordText: {
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
        confirmPasswordRoute: {
            type: String,
            required: false,
            default: "",
        }
    },

    data() {
        return {
            isOpen: false,
            password: "",
            passwordError: "",
            submitting: false,
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
            if(Splade.confirmModal.value?.text){
                return Splade.confirmModal.value.text;
            }

            return this.confirmPassword ? this.defaultPasswordText : this.defaultText;
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

        confirmPassword: function () {
            return Splade.confirmModal.value?.confirmPasswordPromise
                ? Splade.confirmModal.value.confirmPasswordPromise
                : false;
        },
    },

    watch: {
        hasConfirmModal(value) {
            if (value) {
                this.isOpen = true;
                this.resetPassword();
            }
        },
    },

    methods: {
        cancel() {
            Splade.confirmModal.value.rejectPromise();
            this.setIsOpen(false);
            this.resetPassword();
        },

        resetPassword() {
            this.password = "";
            this.passwordError = "";
        },

        confirm() {
            if(!this.confirmPassword) {
                return this.handleSuccess();
            }

            this.submitting = true;
            let password = this.password;
            this.passwordError = "";

            Axios.post(this.confirmPasswordRoute, { password }, { headers: {
                "Accept": "application/json",
                "X-Requested-With": "XMLHttpRequest",
            } }).then(() => {
                Splade.confirmModal.value.resolvePromise(password);
                this.setIsOpen(false);
                this.resetPassword();
            }).catch((e) => {
                if(e.response.status === 422) {
                    this.passwordError = e.response.data.errors.password[0];
                } else {
                    this.passwordError = "An error occurred. Please try again.";
                }
            }).finally(() => {
                this.submitting = false;
            });

        },

        handleSuccess() {
            Splade.confirmModal.value.resolvePromise();
            this.setIsOpen(false);
            this.resetPassword();
        },

        setIsOpen(value) {
            this.isOpen = value;
        },

        emitClose() {
            this.resetPassword();
            Splade.clearConfirmModal();
        },

        setPassword(value) {
            this.password = value;
        },
    },

    render() {
        return this.$slots.default({
            title: this.title,
            text: this.text,
            confirmButton: this.confirmButton,
            cancelButton: this.cancelButton,
            confirmPassword: this.confirmPassword,

            isOpen: this.isOpen,
            setIsOpen: this.setIsOpen,
            cancel: this.cancel,
            confirm: this.confirm,
            emitClose: this.emitClose,
            setPassword: this.setPassword,
            passwordError: this.passwordError,
            submitting: this.submitting,

            // These HeadlessUI exports will be removed in v1.0
            Dialog,
            DialogPanel,
            TransitionRoot,
            TransitionChild,
        });
    },
};
</script>
