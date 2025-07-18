const RESET = "\x1b[0m";
const COLORS = {
    info: "\x1b[36m",
    warn: "\x1b[33m",
    error: "\x1b[31m",
    success: "\x1b[32m",
    debug: "\x1b[35m",
};

const log = (message, level = "info") => {
    const now = new Date().toLocaleTimeString();
    const color = COLORS[level];
    const label = level.toUpperCase().padEnd(7);
    console.log(`${color}[${label}] ${now} › ${message}${RESET}`);
};

export default log;
