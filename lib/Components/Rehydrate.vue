<template>
  <Render
    v-if="html"
    :html="html"
    :passthrough="passthrough"
  />
  <slot
    v-else-if="loading"
    name="placeholder"
  />
  <slot v-else />
</template>

<script>
import { Splade } from "../Splade.js";
import Render from "./Render.vue";

export default {
    components: { Render },
    props: {
        name: {
            type: String,
            required: true
        },

        on: {
            type: Array,
            required: true
        },

        url: {
            type: String,
            required: false,
            default() {
                return Splade.isSsr ? "" : window.location.href;
            },
        },

        poll: {
            type: Number,
            required: false,
            default: null,
        },

        passthrough: {
            type: Object,
            required: false,
            default() {
                return {};
            },
        }
    },

    emits: ["loaded"],

    data() {
        return {
            html: null,
            loading: false
        };
    },

    mounted() {
        this.on.forEach((eventName) => {
            this.$splade.on(eventName, this.request);
        });

        if (this.poll) {
            setTimeout(() => {
                this.request();
            }, this.poll);
        }
    },

    methods: {
        async request() {
            this.loading = true;

            Splade.rehydrate(this.url, this.name).then((response) => {
                this.html = response.data.html;
                this.loading = false;
                this.$emit("loaded");

                if (this.poll) {
                    setTimeout(() => {
                        this.request();
                    }, this.poll);
                }
            });
        },
    }
};
</script>
