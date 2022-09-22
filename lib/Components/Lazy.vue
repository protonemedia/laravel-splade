<template>
  <Render
    v-if="html"
    :html="html"
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

        show: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    data() {
        return {
            html: null
        };
    },

    watch:{
        show(newValue) {
            if(newValue){
                this.request();
            }else{
                this.html = null;
            }
        }
    },

    mounted() {
        if(this.show){
            this.request();
        }
    },

    methods: {
        async request() {
            this.html = null;

            Splade.lazy(this.name).then((response) => {
                this.html = response.data.html;
            });
        },
    }
};
</script>
