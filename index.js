const { exec } = require("child_process")
const fs = require("fs-extra")


/**
 * @description 
 * Will run .sh file 
 * @example 
 * runFile("script")
 * @author zen-out
 * @date 2022-03-06
 * @param {any} fileName
 * @returns {any}
 */
function runFile(fileName) {
    exec(`./${fileName}.sh`, (error, stdout, stderr) => {
        console.log(stdout)
    });
}

/**
 * @example
 * runCommand("echo hello")
 * @author zen-out
 * @date 2022-03-06
 * @param {any} command
 * @returns {any}
 */
function runCommand(command) {
    exec(`${command}`, (error, stdout, stderr) => {
        console.log(stdout)
    });
}

/**
 * @example
 * createFile("hello")
 * @author zen-out
 * @date 2022-03-06
 * @param {any} fileName
 * @returns {any}
 */
function createFile(fileName) {
    let getTemplate = fs.readFileSync("./node_modules/automate_me/create.sh")
    let writeTemplate = fs.writeFileSync(`./${fileName}.sh`, getTemplate)
    exec(`chmod u+x ${fileName}.sh`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
    });
}

function list() {
    console.log("runFile, runCommand, createFile")
}
module.exports = { createFile, runFile, runCommand, list }