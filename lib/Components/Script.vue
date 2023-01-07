<script>

export default {
    props: {
        script: {
            type: String,
            required: true,
        },
    },

    mounted() {
        var func = new Function("obj", "with (obj) { " + this.script + "}");
        func = func.bind(this, this);
        func(this.script);
    },

    render() {
        return "";
    }
};
</script>