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
        },
        confirmedPasswordStatusRoute: {
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
            return Splade.confirmModal.value?.confirmPassword
                ? Splade.confirmModal.value.confirmPassword
                : false;
        },

        confirmPasswordOnce: function () {
            return Splade.confirmModal.value?.confirmPasswordOnce
                ? Splade.confirmModal.value.confirmPasswordOnce
                : false;
        },

        confirmDanger: function () {
            return Splade.confirmModal.value?.confirmDanger
                ? Splade.confirmModal.value.confirmDanger
                : false;
        },
    },

    watch: {
        hasConfirmModal(value) {
            if (value) {
                this.setIsOpen(true);
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
                return this.handleSuccess(null);
            }

            this.submitting = true;
            let password = this.password;
            this.passwordError = "";

            Axios.post(this.confirmPasswordRoute, { password }, { headers: {
                "Accept": "application/json",
                "X-Requested-With": "XMLHttpRequest",
            } }).then(() => {
                this.handleSuccess(password);
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

        handleSuccess(password) {
            Splade.confirmModal.value.resolvePromise(password);
            this.setIsOpen(false);
            this.resetPassword();
        },

        async setIsOpen(value) {
            if(value && this.confirmPassword && this.confirmPasswordOnce) {
                // Check if the password has already been confirmed
                try {
                    const response = await Axios.get(this.confirmedPasswordStatusRoute);

                    if(response.status === 200) {
                        this.handleSuccess(null);
                        Splade.clearConfirmModal();
                        return;
                    }
                } catch { /* empty */ }
            }

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
            confirmDanger: this.confirmDanger,

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
