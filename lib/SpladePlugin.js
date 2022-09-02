import has from "lodash-es/has";
import Confirm from "./Components/Confirm.vue";
import Data from "./Components/Data.vue";
import Defer from "./Components/Defer.vue";
import Dropdown from "./Components/Dropdown.vue";
import Errors from "./Components/Errors.vue";
import Event from "./Components/Event.vue";
import File from "./Components/File.vue";
import Flash from "./Components/Flash.vue";
import Form from "./Components/Form.vue";
import Input from "./Components/Input.vue";
import Link from "./Components/Link.vue";
import Modal from "./Components/Modal.vue";
import Render from "./Components/Render.vue";
import Select from "./Components/Select.vue";
import State from "./Components/State.vue";
import Table from "./Components/Table.vue";
import Textarea from "./Components/Textarea.vue";
import Toast from "./Components/Toast.vue";
import Toasts from "./Components/Toasts.vue";
import Toggle from "./Components/Toggle.vue";
import Transition from "./Components/Transition.vue";
import { Splade } from "./Splade.js";

export default {
    install: (app, options) => {
        options = options || {};
        options.max_keep_alive = has(options, "max_keep_alive") ? options.max_keep_alive : 10;
        options.prefix = has(options, "prefix") ? options.prefix : "Splade";
        options.transform_anchors = has(options, "transform_anchors") ? options.transform_anchors : false;
        options.link_component = has(options, "link_component") ? options.link_component : "Link";

        const prefix = options.prefix;

        app
            .component(`${prefix}Confirm`, Confirm)
            .component(`${prefix}Data`, Data)
            .component(`${prefix}Defer`, Defer)
            .component(`${prefix}Dropdown`, Dropdown)
            .component(`${prefix}Errors`, Errors)
            .component(`${prefix}Event`, Event)
            .component(`${prefix}File`, File)
            .component(`${prefix}Flash`, Flash)
            .component(`${prefix}Form`, Form)
            .component(`${prefix}Input`, Input)
            .component(`${prefix}Modal`, Modal)
            .component(`${prefix}Render`, Render)
            .component(`${prefix}Select`, Select)
            .component(`${prefix}State`, State)
            .component(`${prefix}Table`, Table)
            .component(`${prefix}Textarea`, Textarea)
            .component(`${prefix}Toast`, Toast)
            .component(`${prefix}Toasts`, Toasts)
            .component(`${prefix}Toggle`, Toggle)
            .component(`${prefix}Transition`, Transition)
            .component(options.link_component, Link);

        Object.defineProperty(app.config.globalProperties, "$splade", { get: () => Splade });
        Object.defineProperty(app.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...options }) });

        app.provide("$splade", app.config.globalProperties.$splade);
        app.provide("$spladeOptions", app.config.globalProperties.$spladeOptions);
    }
};