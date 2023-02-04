<script>
export default {
    props: {
        spinner: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    render() {
        return this.$slots.default({
            spinner: this.spinner,
        });
    },
};
</script>
