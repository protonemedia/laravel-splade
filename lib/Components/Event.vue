<script>
import { Splade } from "../Splade.js";
import forOwn from "lodash-es/forOwn";
import isObject from "lodash-es/isObject";

export default {
    props: {
        private: {
            type: Boolean,
            required: false,
            default: false,
        },

        channel: {
            type: String,
            required: true,
        },

        listeners: {
            type: Array,
            required: true,
        },
    },

    data() {
        return {
            subscribed: false,
            subscription: null,
            subscriptions: [],
            events: [],
        };
    },

    beforeUnmount() {
        if (this.subscription) {
            // Leave the channel and clear the data to prevent memory leaks.
            window.Echo.leave(this.subscription.subscription.name);
            this.subscription = null;
            this.subscriptions = [];
        }
    },

    mounted() {
        this.subscription = this.private
            ? window.Echo.private(this.channel)
            : window.Echo.channel(this.channel);

        this.subscription.on("pusher:subscription_succeeded", () => {
            this.subscribed = true;
        });

        this.listeners.forEach((name) => {
            const listener = this.subscription.listen(name, (e) => {
                const redirectKey = "splade.redirect";
                const refreshKey = "splade.refresh";
                const toastKey = "splade.toast";

                let spladeRedirect = null;
                let spladeRefresh = false;
                let spladeToasts = [];

                forOwn(e, (value) => {
                    if (!isObject(value)) {
                        return;
                    }

                    // Check whether the data contains a redirect, refresh, or toast.
                    if (redirectKey in value) {
                        spladeRedirect = value[redirectKey];
                    }

                    if (refreshKey in value) {
                        spladeRefresh = value[refreshKey];
                    }

                    if (toastKey in value) {
                        spladeToasts.push(value);
                    }
                });

                if (spladeRedirect) {
                    Splade.visit(spladeRedirect);
                } else if (spladeRefresh) {
                    Splade.refresh();
                } else {
                    this.events.push({ name, data: e });
                }

                if (spladeToasts.length > 0) {
                    spladeToasts.forEach((spladeToast) => {
                        Splade.pushToast(spladeToast);
                    });
                }

                this.$root.$emit(`event.${name}`, e);
            });

            this.subscriptions.push(listener);
        });
    },

    render() {
        return this.$slots.default({
            subscribed: this.subscribed,
            events: this.events,
        });
    },
};
</script>