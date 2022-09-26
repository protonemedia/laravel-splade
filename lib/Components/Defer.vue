<script>
import { default as Axios } from "axios";

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
    },

    data() {
        return {
            response: Object.assign({}, { ...this.default }),
            processing: false,
        };
    },

    mounted() {
        // Wait for the DOM to perform the request.
        this.$nextTick(this.performRequest);
    },

    methods: {
        performRequest() {
            this.processing = true;

            const config = {
                url: this.url,
                method: this.method,
                headers: {
                    Accept: this.acceptHeader,
                },
            };

            if(Object.keys(this.request).length > 0) {
                config.data = this.request;
            }

            Axios(config)
                .then((response) => {
                    this.response = response.data;
                    this.processing = false;
                })
                .catch(() => {
                    this.processing = false;
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