<template>
  <div>
    <!-- main -->
    <KeepAlive
      v-if="!Splade.isSsr"
      :max="$spladeOptions.max_keep_alive"
    >
      <Render
        :key="`visit.${Splade.pageVisitId.value}`"
        :style="backdropStyling"
        :html="html"
      />
    </KeepAlive>

    <Render
      v-else
      :key="`visit.${Splade.pageVisitId.value}`"
      :style="backdropStyling"
      :html="html"
    />

    <!-- confirm/toast components -->
    <Render :html="components" />

    <!-- modals -->
    <Render
      v-for="stack in Splade.currentStack.value"
      :key="`modal.${stack}`"
      :type="modals[stack].type"
      :html="modals[stack].html"
      :stack="stack"
      :on-top-of-stack="Splade.currentStack.value === stack"
      :animate="animateModal"
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
import { ref, provide, nextTick, inject, computed, onMounted } from "vue";
import { Splade } from "./Splade.js";
import forOwn from "lodash-es/forOwn";
import isString from "lodash-es/isString";
import Render from "./Components/Render.vue";
import ServerError from "./ServerError.vue";

/**
 * When the app runs in the browser, it will parse the initial data and components
 * from the div#app attributes. Otherwise, when running an SSR server, that
 * data will be passed as props and the 'el' prop will be empty.
 */
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

    initialDynamics: {
        type: Object,
        required: false,
        default: (props) => {
            if(!Splade.isSsr) {
                const $el = isString(props.el) ? document.getElementById(props.el) : props.el;

                return JSON.parse($el.dataset.dynamics) || {};
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

/**
 * Provide the current stack to other components so they
 * can calculate whether they are on top of the stack.
 */
provide("stack", 0);

const html = ref();
const modals = ref([]);
const serverErrorHtml = ref(null);
const currentMeta = ref(null);
const animateModal = ref(true);
const $spladeOptions = inject("$spladeOptions") || {};

/**
 * When a modal or slideover is visible, it blurs the underlying page.
 */
const backdropStyling = computed(() => {
    if(Splade.currentStack.value < 1) {
        return [];
    }

    return {
        filter: "blur(4px)",
        "transition-property": "filter",
        "transition-duration": "150ms",
        "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
    };
});

/**
 * Hides the Server Error iframe.
 */
function closeServerError() {
    serverErrorHtml.value = null;
}

/**
 * Closes the modal in the given stack count.
 */
function closeModal(stack) {
    modals.value[stack] = null;
    Splade.popStack();
}

/**
 * It finds the meta tag with the given attribute and content. If it
 * doesn't exists, we create it and append it to the head.
 */
function insertMetaElement(meta)
{
    const $el = document.createElement("meta");

    forOwn(meta, (value, key) => {
        $el[key] = value;
    });

    document.getElementsByTagName("head")[0].appendChild($el);
}

/**
 * Removes the meta tag by the given meta object.
 */
function removeMetaElement(meta) {
    let selector = "meta";

    forOwn(meta, (content, attribute) => {
        selector = `${selector}[${attribute}="${content}"]`;
    });

    try {
        document.querySelector(selector)?.remove();
    } catch {
        //
    }
}

/**
 * Update the document title and meta tags based on the new head data.
 */
Splade.setOnHead((newHead) => {
    if(Splade.isSsr) {
        return;
    }

    if(currentMeta.value === null) {
        currentMeta.value = newHead.meta;
        return;
    }

    currentMeta.value.forEach((meta) => {
        removeMetaElement(meta);
    });

    currentMeta.value = newHead.meta;
    document.title = newHead.title;

    newHead.meta.forEach((meta) => {
        insertMetaElement(meta);
    });

    document.querySelector("link[rel=\"canonical\"]")?.remove();

    if(newHead.canonical) {
        const $el = document.createElement("link");
        $el.rel = "canonical";
        $el.href = newHead.canonical;

        document.getElementsByTagName("head")[0].appendChild($el);
    }
});

/**
 * Reset the modals array and set the new HTML. Scroll to the given
 * scroll height and, if configured, attach an click handler to
 * all anchor elements to use Splade's SPA capabilities.
 */
Splade.setOnHtml((newHtml, scrollY) => {
    modals.value = [];

    html.value = newHtml;

    nextTick(() => {
        if (!Splade.isSsr) {
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

/**
 * Push the modal HTML and type to the modals array.
 */
Splade.setOnModal(function (html, type) {
    if(modals.value[Splade.currentStack.value]) {
        animateModal.value = false;
    }

    modals.value[Splade.currentStack.value] = { html, type };

    nextTick(() => {
        animateModal.value = true;
    });
});
/**
 * Set the Server Error.
 */
Splade.setOnServerError(function (html) {
    serverErrorHtml.value = html;
});

/**
 * Initialize the Splade app with the data from the div#app attributes.
 */
Splade.init(props.initialHtml, props.initialDynamics, props.initialSpladeData);

onMounted(() => {
    if(Splade.isSsr) {
        return;
    }

    const $el = isString(props.el) ? document.getElementById(props.el) : props.el;

    ["components", "html", "dynamics", "splade"].forEach((attribute) => {
        delete $el.dataset[attribute];
    });
});
</script>