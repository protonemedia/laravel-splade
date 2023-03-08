// Helper methods
import forOwn from "lodash-es/forOwn";
import has from "lodash-es/has";
import isObject from "lodash-es/isObject";

// Splade Components
import Button from "./Components/Button.vue";
import Confirm from "./Components/Confirm.vue";
import Data from "./Components/Data.vue";
import DataStores from "./Components/DataStores.vue";
import Defer from "./Components/Defer.vue";
import Dialog from "./Components/Dialog.vue";
import Dropdown from "./Components/Dropdown.vue";
import DynamicHtml from "./Components/DynamicHtml.vue";
import Errors from "./Components/Errors.vue";
import Event from "./Components/Event.vue";
import File from "./Components/File.vue";
import Flash from "./Components/Flash.vue";
import Form from "./Components/Form.vue";
import Input from "./Components/Input.vue";
import Lazy from "./Components/Lazy.vue";
import Link from "./Components/Link.vue";
import Modal from "./Components/Modal.vue";
import OnClickOutside from "./Components/OnClickOutside.vue";
import PreloadedModal from "./Components/PreloadedModal.vue";
import Rehydrate from "./Components/Rehydrate.vue";
import Render from "./Components/Render.vue";
import Script from "./Components/Script.vue";
import Select from "./Components/Select.vue";
import State from "./Components/State.vue";
import Table from "./Components/Table.vue";
import Teleport from "./Components/Teleport.vue";
import Textarea from "./Components/Textarea.vue";
import Toast from "./Components/Toast.vue";
import Toasts from "./Components/Toasts.vue";
import Toggle from "./Components/Toggle.vue";
import Transition from "./Components/Transition.vue";
import VueBridge from "./Components/VueBridge.vue";

import PreserveScrollDirective from "./PreserveScrollDirective.js";

// Splade Core app and progress bar
import { Splade } from "./Splade.js";
import { SpladeProgress } from "./SpladeProgress.js";

export default {
    /**
     * Registers all Splade components and makes the configured
     * options and the Splade core globally available.
     */
    install: (app, options) => {
        // Set the default options
        options = options || {};
        options.max_keep_alive = has(options, "max_keep_alive") ? options.max_keep_alive : 10;
        options.prefix = has(options, "prefix") ? options.prefix : "Splade";
        options.transform_anchors = has(options, "transform_anchors") ? options.transform_anchors : false;
        options.link_component = has(options, "link_component") ? options.link_component : "Link";
        options.progress_bar = has(options, "progress_bar") ? options.progress_bar : false;
        options.components = has(options, "components") ? options.components : {};

        // Prefixing Vue components is only for internal use
        // and will be removed in the future. It's not
        // in the documentation either.
        const prefix = options.prefix;

        app
            .component(`${prefix}Button`, Button)
            .component(`${prefix}Confirm`, Confirm)
            .component(`${prefix}DataStores`, DataStores)
            .component(`${prefix}Data`, Data)
            .component(`${prefix}Defer`, Defer)
            .component(`${prefix}Dialog`, Dialog)
            .component(`${prefix}Dropdown`, Dropdown)
            .component(`${prefix}DynamicHtml`, DynamicHtml)
            .component(`${prefix}Errors`, Errors)
            .component(`${prefix}Event`, Event)
            .component(`${prefix}File`, File)
            .component(`${prefix}Flash`, Flash)
            .component(`${prefix}Form`, Form)
            .component(`${prefix}Input`, Input)
            .component(`${prefix}VueBridge`, VueBridge)
            .component(`${prefix}Lazy`, Lazy)
            .component(`${prefix}Modal`, Modal)
            .component(`${prefix}OnClickOutside`, OnClickOutside)
            .component(`${prefix}PreloadedModal`, PreloadedModal)
            .component(`${prefix}Rehydrate`, Rehydrate)
            .component(`${prefix}Render`, Render)
            .component(`${prefix}Script`, Script)
            .component(`${prefix}Select`, Select)
            .component(`${prefix}State`, State)
            .component(`${prefix}Table`, Table)
            .component(`${prefix}Teleport`, Teleport)
            .component(`${prefix}Textarea`, Textarea)
            .component(`${prefix}Toast`, Toast)
            .component(`${prefix}Toasts`, Toasts)
            .component(`${prefix}Toggle`, Toggle)
            .component(`${prefix}Transition`, Transition)
            .component(options.link_component, Link)
            .directive(`${prefix}PreserveScroll`, PreserveScrollDirective);

        // This way you can inject the global Splade instance and the options
        Object.defineProperty(app.config.globalProperties, "$splade", { get: () => Splade });
        Object.defineProperty(app.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...options }) });
        app.provide("$splade", app.config.globalProperties.$splade);
        app.provide("$spladeOptions", app.config.globalProperties.$spladeOptions);

        if (options.progress_bar) {
            // Set the default config
            const progressDefaults = {
                delay: 250,
                color: "#4B5563",
                css: true,
                spinner: false,
            };

            if(!isObject(options.progress_bar)) {
                options.progress_bar = {};
            }

            // Apply the any custom configuration to the default config
            ["delay", "color", "css", "spinner"].forEach((option) => {
                if(!has(options.progress_bar, option)) {
                    options.progress_bar[option] = progressDefaults[option];
                }
            });

            // Init the progress bar
            SpladeProgress.init(options.progress_bar);
        }

        forOwn(options.components, (definition, name) => {
            app.component(name, definition);
        });
    }
};