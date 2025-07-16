import config from "../parser/config.js";
import logger from "../helpers/logger.js";

const startServer = async () => {
    const settings = await config();
    const port = settings.port ?? 8000;

    logger(`Server running on port ${port}`, "success");

    Deno.serve({ port }, async (req) => {
        const { default: html } = await import(`./html.js?ts=${Date.now()}`);

        return new Response(html(), {
            headers: { "content-type": "text/html; charset=utf-8" },
        });
    });
};

export default startServer;
