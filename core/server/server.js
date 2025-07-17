import config from "../parser/config.js";
import logger from "../helpers/logger.js";
import content, {setLanguage, setTitle} from "../parser/content.js";

const startServer = async () => {
    const settings = await config();
    const port = settings.port ?? 8000;

    logger(`Server running on port ${port}`, "success");

    Deno.serve({port}, async (req) => {
        const url = new URL(req.url);
        const pathname = url.pathname;

        try {
            const filePath = `./public${pathname}`;
            const file = await Deno.readFile(filePath);
            const contentType = getContentType(filePath);

            return new Response(file, {
                headers: {
                    "content-type": contentType,
                },
            });
        } catch {
            return new Response(content(), {
                headers: {
                    "content-type": "text/html; charset=utf-8",
                },
            });
        }
    });

    setLanguage(settings.language);
    setTitle(settings.title);
};

function getContentType(path) {
    if (path.endsWith(".js")) return "application/javascript";
    if (path.endsWith(".css")) return "text/css";
    if (path.endsWith(".png")) return "image/png";
    if (path.endsWith(".svg")) return "image/svg+xml";
    return "application/octet-stream";
}


export default startServer;
