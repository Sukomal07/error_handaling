const books = [
    {
        title:"The great boy",
        author:"james scott",
        year:1967
    },
    {
        title:"To kill a mouse",
        author:"hoper lui",
        year:1950
    },
    {
        title:"The Ghost",
        author:"Franklin Bumrah",
        year:1980
    },
    {
        title:"Who are you?",
        author:"geoge orwell",
        year:1926
    },
    {
        title:"Love addict",
        author:"thomas grin",
        year:1990
    },
    {
        title:"javascript",
        author:"ecma postu",
        year:1980
    }
]
function titles(title){
    title.sort()
    console.log(title.join(","))
}
function extractTitles(books, callback){
    const titles = books.map((book) => book.title)
    callback(titles)
}
extractTitles(books, titles)

