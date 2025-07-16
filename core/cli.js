import logger from "./helpers/logger.js";
import bootstrap from "./bootstrap.js";

if (process.argv && process.argv?.[2]) {
    bootstrap(process.argv?.[2]?.substring(2))
} else {
    logger("Run error => Check the running commands", "error")
}