import readFile from "../helpers/readFile.js";

const config = async () => {
    readFile("book.config.json")
}

export default config