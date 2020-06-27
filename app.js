const yargs = require('yargs')
const chalk = require('chalk')

const fs = require('fs')

const JSONfile = "json-1.json"

// add command
yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        name: {    // asks for a --title and lists this stuff when it doesn't get it
            describe: "Name",
            demandOption: true, // it is a requirement
            type: 'string'  //must be a string, at least ""
        },
        age: {
            describe: "Age",
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        //  Initial Data
        const buffer = fs.readFileSync(JSONfile)
        const JSONdata = JSON.parse(buffer.toString())
        const entryName = argv.name
        const entryAge = argv.age

        let duplicateExists = false;

        // loop over existing array
        for (let currName of Object.keys(JSONdata)) {
            if (JSONdata[currName].name == entryName) {
                duplicateExists = true;
                break;
            }
        }
        
        console.log("duplicateExists --value: " + duplicateExists)

        // if not duplicate name then add entry
        if (!duplicateExists) {  
            const objectLength = Object.keys(JSONdata).length
            JSONdata[`Person ${objectLength + 1}`].name = entryName
            JSONdata[`Person ${objectLength + 1}`].age = entryAge

            console.log(JSONdata)
        }
    }
})

yargs.command({
    command: "remove",
    describe: "removing a note",
    handler: function () {
        console.log(chalk.red("Removing a note..."))
    }
})

yargs.command({
    command: "list",
    describe: "prints a list",
    handler: function () {
        console.log("list command executed...")
    }
})

yargs.command({
    command: "read",
    describe: "reading a message",
    handler: function () {
        console.log("reading command executed")
    }
})

// allows printing --help and other information
yargs.parse()