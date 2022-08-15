import "./bootstrap";
import "../css/app.css";

import { createApp } from "vue";

// for dev
// import "../../../lib/Components/choices.scss";
// import "../../../lib/Components/flatpickr.styl";
// import { renderSpladeApp, SpladePlugin } from "../../../dist/protone-media-laravel-splade";

// for build
import "@protonemedia/laravel-splade/dist/style.css";
import { renderSpladeApp, SpladePlugin } from "@protonemedia/laravel-splade";

const el = document.getElementById("app");

createApp({
    render: renderSpladeApp({ el })
})
    .use(SpladePlugin, {
        "max_keep_alive": 10,
        "transform_anchors": false,
    })
    .mount(el);
