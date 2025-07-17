let language = ""
let title = ""
let data = ""

const content = () => {
    return (`
        <!doctype html>
        <html lang="${language}">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>${title}</title>
            <link rel="stylesheet" href="./app.css">
        </head>
        <body>
            <div class="container">${data}</div>
            <script src="./app.js"></script>
        </body>
        </html>
    `)
}

const setLanguage = (lang) => {
    language = lang.toLowerCase()
}

const setTitle = (titre) => {
    title = titre
}

const setContent = (content) => {
    data = content
}

export { setLanguage, setTitle, setContent }
export default content;