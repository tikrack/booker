import config from "../parser/config.js";
import logger from "../helpers/logger.js";
import content, {setContent, setLanguage, setTitle} from "../parser/content.js";

const startServer = async () => {
    const settings = await config();
    const port = settings.port ?? 8000;

    logger(`Server running on port ${port}`, "success");

    Deno.serve({port}, async (req) => {
        return new Response(content(), {
            headers: {"content-type": "text/html; charset=utf-8"},
        });
    });

    setLanguage(settings.language);
    setTitle(settings.title);
};

export default startServer;
