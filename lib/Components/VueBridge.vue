<script>
import get from "lodash-es/get";
import set from "lodash-es/set";
import forOwn from "lodash-es/forOwn";
import { default as Axios } from "axios";
import { Splade } from "../Splade";

export default {
    props: {
        backendRoute: {
            type: String,
            required: true
        },

        default: {
            type: Object,
            required: false,
            default: () => ({})
        },

        initialInstance: {
            type: String,
            required: true
        },

        initialSignature: {
            type: String,
            required: true
        },

        methods: {
            type: Array,
            required: true,
        },

        originalUrl: {
            type: String,
            required: true
        },

        verb: {
            type: String,
            required: true
        },
    },

    data(){
        return {
            instance: this.initialInstance,
            signature: this.initialSignature,
            values: Object.assign({}, this.default),
        };
    },

    render() {
        const self = this;

        const slotProps = {
            props: new Proxy(this.values, {
                ownKeys: function() {
                    return Object.keys(self.values);
                },
                get: (target, prop) => {
                    return get(self.values, prop);
                },
                set: (target, prop, value) => {
                    set(self.values, prop, value);
                }
            }),
        };

        this.methods.forEach(method => {
            slotProps[method] = async (...data) => {
                if(data.length === 1 && get(data, "0._vts")){
                    data = [];
                }

                let response = null;

                try{
                    response = await Axios.post(this.backendRoute, {
                        instance: this.instance,
                        signature: this.signature,
                        url: this.originalUrl,
                        verb: this.verb,
                        props: this.values,
                        method,
                        data
                    }, { headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        Accept: "text/html, application/xhtml+xml",
                    } });
                } catch(e) {
                    Splade.onServerError(e.response.data);
                    return;
                }

                this.instance = response.data.instance;
                this.signature = response.data.signature;

                forOwn(response.data.data, (value, key) => {
                    set(this.values, key, value);
                });

                if(response.data.redirect) {
                    return Splade.visit(response.data.redirect);
                }

                response.data.toasts.forEach(toast => {
                    Splade.pushToast(toast);
                });

                return response.data.result;
            };
        });

        return this.$slots.default(slotProps);
    },
};
</script>