const { checkPath } = require("./checkPath")
const { copy } = require("./copyFiles")
const { deletePath } = require("./deletePath")
const { readJSON, writeJSON, appendToJSON, replaceJSON, mergeJSONObject, getJSONObject, addToNestedJSON } = require("./json")
const { readFile, writeFile, appendFile, getDirNames } = require("./readWrite")
module.exports = { checkPath, copy, readJSON, writeJSON, deletePath, readFile, writeFile, appendToJSON, replaceJSON, appendFile, mergeJSONObject, getJSONObject, addToNestedJSON, getDirNames }