<script>
import { default as Axios } from "axios";
import debounce from "lodash-es/debounce";

export default {
    props: {
        url: {
            type: String,
            required: true,
        },

        method: {
            type: String,
            required: false,
            default: "GET",
        },

        acceptHeader: {
            type: String,
            required: false,
            default: "application/json",
        },

        headers: {
            type: Object,
            required: false,
            default: () => {
                return {};
            },
        },

        poll: {
            type: Number,
            required: false,
            default: null,
        },

        default: {
            type: Object,
            required: false,
            default: () => {
                return {};
            },
        },

        request: {
            type: Object,
            required: false,
            default: () => {
                return {};
            },
        },

        manual: {
            type: Boolean,
            required: false,
            default: false
        },

        watchDebounce: {
            type: Number,
            required: false,
            default: 0
        },

        watchValue: {
            validator() {
                return true;
            },
            required: false,
            default: null
        }
    },

    emits: ["success", "error"],

    data() {
        return {
            response: Object.assign({}, { ...this.default }),
            processing: false,
            debounceFunction: null,
        };
    },

    watch: {
        watchValue: {
            deep: true,
            handler() {
                this.processing = true;

                this.watchDebounce ? this.debounceFunction() : this.performRequest();
            }
        }
    },

    mounted() {
        if(!this.manual) {
            // Wait for the DOM to perform the request.
            this.$nextTick(this.performRequest);
        }
    },

    created() {
        this.debounceFunction = debounce(() => {
            this.performRequest();
        }, this.watchDebounce);
    },

    methods: {
        performRequest() {
            this.processing = true;

            const headers = {};

            if(this.acceptHeader) {
                headers.Accept = this.acceptHeader;
            }

            const config = {
                url: this.url,
                method: this.method,
                headers: { ...headers, ...this.headers }
            };

            if(Object.keys(this.request).length > 0) {
                config.data = this.request;
            }

            Axios(config)
                .then((response) => {
                    this.response = response.data;
                    this.processing = false;
                    this.$emit("success", response.data);
                })
                .catch(() => {
                    this.processing = false;
                    this.$emit("error");
                });

            if (this.poll) {
                setTimeout(() => {
                    this.performRequest();
                }, this.poll);
            }
        },
    },

    render() {
        return this.$slots.default({
            processing: this.processing,
            response: this.response,
            reload: this.performRequest,
        });
    },
};
</script>