import { startServer, stopServer } from "./server.js";
import logger from "../helpers/logger.js";

const basePath = new URL("../../", import.meta.url).pathname;

const WATCH_FILES = [
    basePath + "book.config.json",
    new URL("./html.js", import.meta.url).pathname,
];

export const startWatcher = async () => {
    for (const file of WATCH_FILES) {
        try {
            const stat = await Deno.stat(file);
        } catch {
            console.error(`❌ Not found: ${file}`);
        }
    }

    const watcher = Deno.watchFs(WATCH_FILES);

    logger("🔍 Watching for file changes...", "info");
    await startServer();

    for await (const event of watcher) {
        if (event.kind === "modify") {
            logger(`🌀 Change detected in: ${event.paths.join(", ")}`, "debug");
            stopServer();
            await new Promise((res) => setTimeout(res, 100));
            await startServer();
        }
    }
};
