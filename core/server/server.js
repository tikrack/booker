import html from "./html.js";
import config from "../parser/config.js";

const server = async () => {
    const settings = await config();
    const port = settings.port ?? 8000;

    console.log(`Server running at port 🚀: ${port}`);

    Deno.serve({port}, (req) => {
        return new Response(html(), {
            headers: {"content-type": "text/html; charset=utf-8"},
        });
    });
};

export default server;
