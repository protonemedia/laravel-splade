function startServer(createServer, renderToString, port, createApp) {
    createServer(async (request, response) => {
        if (request.method == "POST") {
            let data = "";
            request.on("data", (chunk) => (data += chunk));
            request.on("end", async () => {
                const json = JSON.parse(data);

                const app = createApp({
                    components: json.components,
                    initialHtml: json.html,
                    initialSpladeData: json.splade
                });

                const body = await renderToString(app);

                response.writeHead(200, { "Content-Type": "application/json", "Server": "Splade SSR" });
                response.write(JSON.stringify({ body }));
                response.end();
            });
        }
    }).listen(port, () => console.log(`Splade SSR server started on port ${port}.`));
}

export { startServer };