<template>
  <div>
    <!-- main -->
    <component
      :is="Splade.isSsr ? 'div' : 'keep-alive'"
      :max="$spladeOptions.max_keep_alive"
    >
      <Render
        :key="`visit.${Splade.pageVisitId.value}`"
        :class="{
          'transition ease-in-out blur-sm': Splade.currentStack > 0,
        }"
        :html="html"
      />
    </component>

    <Render :html="components" />

    <!-- modals -->
    <Render
      v-for="stack in Splade.currentStack.value"
      :key="`modal.${stack}`"
      :type="modals[stack].type"
      :html="modals[stack].html"
      :stack="stack"
      :on-top-of-stack="Splade.currentStack.value === stack"
      @close="closeModal(stack)"
    />

    <!-- server errors -->
    <ServerError
      v-if="serverErrorHtml"
      :html="serverErrorHtml"
      @close="closeServerError"
    />
  </div>
</template>

<script setup>
import { ref, provide, nextTick, inject } from "vue";
import { Splade } from "./Splade.js";
import forOwn from "lodash-es/forOwn";
import isString from "lodash-es/isString";
import Render from "./Components/Render.vue";
import ServerError from "./ServerError.vue";

const props = defineProps({
    el: {
        type: [String, Object],
        required: false,
        default: "",
    },

    components: {
        type: String,
        required: false,
        default: (props) => {
            if(!Splade.isSsr) {
                const $el = isString(props.el) ? document.getElementById(props.el) : props.el;

                return JSON.parse($el.dataset.components) || "";
            }
        },
    },

    initialHtml: {
        type: String,
        required: false,
        default: (props) => {
            if(!Splade.isSsr) {
                const $el = isString(props.el) ? document.getElementById(props.el) : props.el;

                return JSON.parse($el.dataset.html) || "";
            }
        },
    },

    initialSpladeData: {
        type: Object,
        required: false,
        default: (props) => {
            if(!Splade.isSsr) {
                const $el = isString(props.el) ? document.getElementById(props.el) : props.el;

                return JSON.parse($el.dataset.splade) || {};
            }
        },
    },
});


provide("stack", 0);

const html = ref();
const modals = ref([]);
const serverErrorHtml = ref(null);

function closeServerError() {
    serverErrorHtml.value = null;
}

function closeModal(stack) {
    modals[stack] = null;
    Splade.popStack();
}

const $spladeOptions = inject("$spladeOptions") || {};

function findOrCreateMeta(attribute, content)
{
    let $el = document.querySelector(`meta[${attribute}="${content}"]`);

    if($el) {
        return $el;
    }

    $el = document.createElement("meta");
    $el[attribute] = content;
    document.getElementsByTagName("head")[0].appendChild($el);

    return $el;
}

function updateMetaElement(meta) {
    const $el = meta.name
        ? findOrCreateMeta("name", meta.name)
        : findOrCreateMeta("property", meta.property);

    forOwn(meta, (value, key) => {
        $el[key] = value;
    });
}

Splade.setOnHead((newHead) => {
    if(Splade.isSsr) {
        return;
    }

    document.title = newHead.title;

    newHead.meta.forEach((meta) => {
        updateMetaElement(meta);
    });
});

Splade.setOnHtml((newHtml, scrollY) => {
    modals.value = [];
    html.value = newHtml;

    nextTick(() => {
        if (!Splade.isSsr){
            window.scrollTo(0, scrollY);
        }

        if ($spladeOptions.transform_anchors) {
            [...document.querySelectorAll("a")].forEach((anchor) => {
                if (anchor.href == "" || anchor.href.charAt(0) == "#") {
                    return;
                }

                if (anchor.__vnode.dynamicProps !== null) {
                    return;
                }

                if (anchor.hasAttribute("download")) {
                    return;
                }

                anchor.onclick = function (event) {
                    event.preventDefault();
                    Splade.visit(anchor.href);
                };
            });
        }
    });
});

Splade.setOnModal(function (html, type) {
    modals.value[Splade.currentStack.value] = { html, type };
});

Splade.setOnServerError(function (html) {
    serverErrorHtml.value = html;
});

Splade.init(props.initialHtml, props.initialSpladeData);
</script>