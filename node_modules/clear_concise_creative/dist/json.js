const { checkPath } = require('./checkPath')
const make_legit = require("make_legit")
const { extend } = require("lodash")
const fs = require("fs-extra")
    /**
     * @Description 
     * ccc.writeJSON('./db.json', array)
     * ccc.writeJSON('./db.json', object)
     * @author zen-out
     * @date 2022-03-04
     * @param {any} filePath
     * @param {any} object
     */
function writeJSON(filePath, object) {
    fs.outputJsonSync(filePath, object)
}

/**
 * @Description 
 * let getJSON = ccc.readJSON("./db.json")
 * @author zen-out
 * @date 2022-03-04
 * @param {any} filePath
 * @returns {object}
 */
function readJSON(filePath) {
    if (checkPath(filePath)) {
        let readFromFile = fs.readJsonSync(filePath)
        return readFromFile
    }
}
/**
 * @example
 * ccc.appendToJSON("./data/appendToMe.json", "test", { id: "lesley" })
 * @Description
 * 1. Grabs JSON from json file
 * 2. If the key does not exist, then it will create a new key and assign the object 
 * 3. If the key does exist, and it is not an array 
 * 4. It will create an array and it will push the object into the array 
 * @author zen-out
 * @date 2022-03-04
 * @param {any} "1:30PM"
 */
function appendToJSON(filePath, key, data) {
    if (checkPath(filePath)) {
        let readFromFile = readJSON(filePath)
        let getKey = readFromFile[key]
        if (getKey === undefined) {
            if (Array.isArray(data)) {
                readFromFile[key] = data
                writeJSON(filePath, readFromFile)
            } else {
                let newArr = []
                newArr.push(data)
                readFromFile[key] = newArr
                writeJSON(filePath, readFromFile)
            }
        } else {
            if (Array.isArray(readFromFile[key])) {
                readFromFile[key].push(data)
                writeJSON(filePath, readFromFile)
            } else {
                let newArr = []
                newArr.push(getKey)
                newArr.push(data)
                readFromFile[key] = newArr;
                writeJSON(filePath, readFromFile)
            }
        }
    }
}

/**
 * @Description 
 * 1. Reads from json file 
 * 2. Replaces object depeneding on array passed in 
 * @example
 * let objectDir = ["opts", "theme_opts", "codepen"]
ccc.replaceJSON("./data/appendToMe.json", objectDir, { "sexylink": "link" })
 * @author zen-out
 * @date 2022-03-05
 * @param {any} filePath
 * @param {any} filePath
 */
function replaceJSON(filePath, arrDir, objectToReplace) {

    if (checkPath(filePath)) {
        let readFromFile = readJSON(filePath)
        let currObj = readFromFile
        for (let i = 0; i < arrDir.length; i++) {
            let getName = arrDir[i]
            currObj = currObj[getName]
        }
        let nameOne = arrDir[0]
        if (arrDir.length === 3) {
            let nameTwo = arrDir[1]
            let nameThree = arrDir[2]
            readFromFile[nameOne][nameTwo][nameThree] = objectToReplace
            writeJSON(filePath, readFromFile)
        } else if (arrDir.length == 2) {
            let nameTwo = arrDir[1]
            readFromFile[nameOne][nameTwo] = objectToReplace
            writeJSON(filePath, readFromFile)
        } else {
            readFromFile[nameOne] = objectToReplace
            writeJSON(filePath, readFromFile)
        }
    }
}

/**
 * @example
 * let scripts = ccc.getJSONObject("../package.json", ["scripts"])
 * @author zen-out
 * @date 2022-03-06
 * @param {any} filePath
 * @param {any}  arrDir
 * @returns {object} JSON object
 */
function getJSONObject(filePath, arrDir) {

    if (checkPath(filePath)) {
        let readFromFile = readJSON(filePath)
        let currObj = readFromFile
        for (let i = 0; i < arrDir.length; i++) {
            let getName = arrDir[i]
            currObj = currObj[getName]
        }
        return currObj;
    }
}

/**
 * @example
 * let addedCommands = ccc.mergeJSONObject("../package.json", ["scripts"], {
    "play": "node playground.js",
    "deploy": "git add . && git commit -m 'updated' && git push && npm version patch && npm publish",
})
 * @author zen-out
 * @date 2022-03-06
 * @param {any} filePath
 * @param {any}  arrDir
 * @param {any}  updateObj
 */
function mergeJSONObject(filePath, arrDir, updateObj) {

    if (checkPath(filePath)) {
        let original = getJSONObject(filePath, arrDir)
        let merged = extend(original, updateObj);
        replaceJSON(filePath, arrDir, merged)
    }
}

/**
 * @example
 * ccc.addToNestedJSON("../sample.json", ["opts", "theme_opts", "menu"], {
    "title": "visual instructions",
    "link": "hi",
    "target": "_blank"
})
 * @author zen-out
 * @date 2022-03-06
 * @param {any} filePath
 * @param {any}  arrDir
 * @param {any}  addObj
 */
function addToNestedJSON(filePath, arrDir, addObj) {

    if (checkPath(filePath)) {
        let original = getJSONObject(filePath, arrDir)
        if (Array.isArray(original)) {
            original.push(addObj)
            replaceJSON(filePath, arrDir, original)
        } else {
            let newArr = []
            newArr.push(original)
            newArr.push(addObj)
            replaceJSON(filePath, arrDir, newArr)
        }
    }
}

module.exports = { writeJSON, readJSON, appendToJSON, replaceJSON, getJSONObject, mergeJSONObject, addToNestedJSON }