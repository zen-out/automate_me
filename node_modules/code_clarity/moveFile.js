const { getDate } = require("./module/getDate")
const fs = require("fs")

// steps, snippets, exceptions, timer
function removeDirectory(fileName) {
    try {

        fs.rmdirSync(`./focus/${getDate}`)
    } catch (error) {
        console.log("no such folder")
    }
}

function deleteToday() {
    removeDirectory("steps")
    removeDirectory("snippets")
    removeDirectory("execeptions")
    removeDirectory("timer")
}
deleteToday()