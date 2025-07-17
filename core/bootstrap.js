import logger from "./helpers/logger.js";
import startServer from "./server/server.js"

const bootstrap = (run_argv) => {
    const accepted_commands = ["dev", "build"];

    if (!run_argv || !accepted_commands.includes(run_argv)) logger("Run error => Check the running commands", "error")

    if (run_argv === "dev") {
        startServer();
    }

    if (run_argv === "build") {

    }
}

export default bootstrap