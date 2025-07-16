const readFile = async (src) => {
    const decoder = new TextDecoder("utf-8");

    const response = await Deno.readFile(src);

    return decoder.decode(response)
}

export default readFile;