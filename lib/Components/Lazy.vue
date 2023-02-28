<template>
  <Render
    v-if="html"
    :html="html"
    :passthrough="passthrough"
  />
  <slot v-else-if="show" />
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

        url: {
            type: String,
            required: false,
            default() {
                return Splade.isSsr ? "" : window.location.href;
            },
        },

        show: {
            type: Boolean,
            required: false,
            default: true
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
            html: null
        };
    },

    watch:{
        show(newValue) {
            if(newValue) {
                // Perform a new request to refresh the content.
                this.request();
            } else {
                // Clear the HTML so the placeholder will be shown to next time.
                this.html = null;
            }
        }
    },

    mounted() {
        if(this.show) {
            this.request();
        }
    },

    methods: {
        async request() {
            this.html = null;

            Splade.lazy(this.url, this.name).then((response) => {
                this.html = response.data.html;
                this.$emit("loaded");
            });
        },
    }
};
</script>
