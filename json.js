const book = {
    title: "Cracking the Tech Career",
    author: "Gayle Laakmann"
}

// converts object into string
const bookJSON = JSON.stringify(book)
console.log(bookJSON)

// converts string to object and extracts author
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)
