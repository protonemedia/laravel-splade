import { createServer } from "http";
import { createSSRApp } from "vue";
import { renderToString } from "@vue/server-renderer";
import { renderSpladeApp, SpladePlugin, startServer } from "@protonemedia/laravel-splade";

startServer(createServer, renderToString, (props) => {
    return createSSRApp({
        render: renderSpladeApp(props)
    })
        .use(SpladePlugin);
});