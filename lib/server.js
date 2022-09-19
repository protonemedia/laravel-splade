import { forOwn } from "lodash-es";

function startServer(createServer, renderToString, createApp) {
    const args = {};

    process.argv.slice(2).forEach((argument) => {
        const splitted = argument.replace(/^-+/, "").split("=");

        args[splitted[0]] = (splitted.length === 2) ? splitted[1] : true;
    });

    const port = args.port || 9000;

    createServer(async (request, response) => {
        if (request.method == "POST") {
            let data = "";
            request.on("data", (chunk) => (data += chunk));
            request.on("end", async () => {
                const json = JSON.parse(data);

                const app = createApp({
                    components: json.components,
                    initialDynamics: json.dynamics,
                    initialHtml: json.html,
                    initialSpladeData: json.splade
                });

                const ctx = {};
                let body = await renderToString(app, ctx);

                forOwn(ctx.teleports, (html, id) => {
                    id = id.substring(1);   // remove the id selector (#)

                    // inject rendered html
                    body = body.replace(
                        `<div id="${id}"></div>`,
                        `<div id="${id}">${html}</div>`
                    );
                });

                response.writeHead(200, { "Content-Type": "application/json", "Server": "Splade SSR" });
                response.write(JSON.stringify({ body }));
                response.end();
            });
        }
    }).listen(port, () => console.log(`Splade SSR server started on port ${port}.`));
}

export { startServer };