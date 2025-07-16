import html from "./html.js";
import config from "../parser/config.js";
import logger from "../helpers/logger.js";

const server = async () => {
    const settings = await config();
    const port = settings.port ?? 8000;

    logger(`Server running at port 🚀: ${port}`, "warn");

    Deno.serve({port}, (req) => {
        return new Response(html(), {
            headers: {"content-type": "text/html; charset=utf-8"},
        });
    });
};

export default server;
