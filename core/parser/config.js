import readFile from "../helpers/readFile.js";

const config = async () => {
    return await readFile("book.config.json", {
        json: true
    });
}

export default config