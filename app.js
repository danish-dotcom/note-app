const yargs = require('yargs')
const chalk = require('chalk')

// add command
yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        title: {    // asks for a --title and lists this stuff when it doesn't get it
            describe: "Note title",   
            demandOption: true, // it is a requirement
            type: 'string'  //must be a string, at least ""
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        let title = chalk.blue.underline("Title") + ": " + chalk.blue(argv.title)
        let body = chalk.blue.underline("Body") + ": " + chalk.blue(argv.body)
        let nextLine = "\n"
        console.log(title + nextLine + body)
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