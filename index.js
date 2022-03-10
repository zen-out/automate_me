const { exec } = require("child_process")
const ccc = require("clear_concise_creative")

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
    ccc.writeFile(`./${fileName}.sh`, "#!/bin/bash \necho 'hello'")
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

module.exports = { createFile, runFile, runCommand }