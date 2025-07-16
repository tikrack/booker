const readFile = async (src, option) => {
    const decoder = new TextDecoder("utf-8");

    const response = await Deno.readFile(src);

    const decode_text = decoder.decode(response)

    if (option?.json) {
        return JSON.parse(decode_text);
    }

    return decode_text;
}

export default readFile;