<script>
import { Splade } from "../Splade.js";
import forOwn from "lodash-es/forOwn";
import isObject from "lodash-es/isObject";

export default {
    inject: ["stack"],

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

        preserveScroll: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    emits: ["subscribed", "event"],

    data() {
        return {
            subscribed: false,
            subscription: null,
            subscriptions: [],
            events: [],
            pendingVisit: null,
            pendingRefresh: false,
        };
    },

    computed: {
        currentStack() {
            return Splade.currentStack.value;
        },
    },

    watch: {
        currentStack() {
            this.handlePendingVisit();
            this.handlePendingRefresh();
        },

        pendingVisit() {
            this.handlePendingVisit();
        },

        pendingRefresh() {
            this.handlePendingRefresh();
        },
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

        if(this.subscription) {
            this.bindListeners();
        } else {
            console.error("[Splade Event component] Unable to subscribe to channel: " + this.channel);
        }
    },

    methods: {
        handlePendingVisit() {
            if(!this.pendingVisit) {
                return;
            }

            if(Splade.currentStack.value === this.stack) {
                Splade.visit(this.pendingVisit);
                this.pendingVisit = null;
            }
        },

        handlePendingRefresh() {
            if(!this.pendingRefresh) {
                return;
            }

            if(Splade.currentStack.value === this.stack) {
                Splade.refresh(this.pendingRefresh.preserveScroll || this.preserveScroll);
                this.pendingRefresh = false;
            }
        },

        bindListeners() {
            this.subscription.on("pusher:subscription_succeeded", () => {
                this.subscribed = true;
                this.$emit("subscribed");
            });

            this.listeners.forEach((name) => {
                const listener = this.subscription.listen(name, (e) => {
                    this.$emit("event", { name, data: e });

                    const preserveScrollKey = "splade.preserveScroll";
                    const redirectKey = "splade.redirect";
                    const refreshKey = "splade.refresh";
                    const toastKey = "splade.toast";

                    let spladeRedirect = null;
                    let preserveScroll = false;
                    let spladeRefresh = false;
                    let spladeToasts = [];

                    forOwn(e, (value) => {
                        if (!isObject(value)) {
                            return;
                        }

                        // Check whether the data contains a redirect, refresh (+ preserve scroll), or toast.
                        if (redirectKey in value) {
                            spladeRedirect = value[redirectKey];
                        }

                        if(preserveScrollKey in value) {
                            preserveScroll = value[preserveScrollKey];
                        }

                        if (refreshKey in value) {
                            spladeRefresh = value[refreshKey];
                        }

                        if (toastKey in value) {
                            spladeToasts.push(value);
                        }
                    });

                    if (spladeRedirect) {
                        this.pendingVisit = spladeRedirect;
                    } else if (spladeRefresh) {
                        this.pendingRefresh = { preserveScroll };
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

        unsubscribe() {
            if (this.subscription) {
                window.Echo.leave(this.subscription.subscription.name);
                this.subscription = null;
                this.subscriptions = [];
            }
        },
    },

    render() {
        return this.$slots.default({
            subscribed: this.subscribed,
            events: this.events,
        });
    },
};
</script>