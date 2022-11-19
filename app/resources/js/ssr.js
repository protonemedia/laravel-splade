import { createServer } from "http";
import { createSSRApp } from "vue";
import { renderToString } from "@vue/server-renderer";

// for dev
// import { renderSpladeApp, SpladePlugin, startServer } from "../../../dist/protone-media-laravel-splade";

// for build
import { renderSpladeApp, SpladePlugin, startServer } from "@protonemedia/laravel-splade";
import Counter from "./Counter.vue";

startServer(createServer, renderToString, (props) => {
    return createSSRApp({
        render: renderSpladeApp(props)
    })
        .component("Counter", Counter)
        .use(SpladePlugin);
});
