const fs = require('fs')
const chalk = require('chalk')
const { inverse } = require('chalk')

const book = {
    "book 1": {
        title: "Cracking the Tech Career",
        author: "Gayle Laakmann",
    },
    "book 2": {
        title: "The Future of the Mind",
        author: "Michio Kaku"
    }
}


book["book 3"]                                // Creates initial Array Member
book["book 3"] = { author: "new author" }     // Creates object for that member 
book["book 3"].title = "new title"            // Adds title property to object

// Logs 
console.log(chalk.blue.inverse("book 3, then all books"))     
console.log(book["book 3"])
console.log(book)                   






// // store JSON in .json file
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('json-1.json', bookJSON)

// // access the title of the first book from the file
// const dataBuffer = fs.readFileSync('json-1.json')
// const dataJSON = JSON.parse(dataBuffer.toString())

// book["book 3"][title] "new title"}

// book["book 3"] = { author : "new author"}


// book["book 3"] = 'age'

// console.log(Object.keys(book).length)
// console.log(dataJSON["book 1"].title)