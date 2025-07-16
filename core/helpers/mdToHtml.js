import showdown from "showdown";

const mdToHtml = (md) => {
    const converter = new showdown.Converter()

    return converter.makeHtml(md);
}

export default mdToHtml;