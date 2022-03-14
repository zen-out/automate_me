const fs = require("fs-extra")

/**
 * checkPath(path)
 * @author zen-out
 * @date 2022-03-10
 * @param {any} path
 * @returns {boolean}
 */
function checkPath(path) {
    let getPath = fs.pathExistsSync(path)
    if (getPath) {
        return true;
    } else {
        console.log("path does not exist" + path)
        return false;
    }
}

module.exports = { checkPath }