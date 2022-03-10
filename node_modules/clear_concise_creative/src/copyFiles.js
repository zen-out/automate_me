const copyFiles = require("copyFiles")
    /**
     * @example
     * ccc.copy("./src/**.js", "./dist") 
     * ccc.copy("./src/ ** / *", "dist", true)
     * @author zen-out
     * @date 2022-03-07
     * @param {any} toCopy
     * @param {any}  copyTo
     * @returns {any}
     */
function copy(toCopy, copyTo, all = false) {
    if (all) {
        copyFiles([toCopy, copyTo], {
            all: true,
        }, () => {
            console.log(`you moved file(s) from ${toCopy} to ${copyTo}`)
        })
    } else {
        copyFiles([toCopy, copyTo], {
            up: true
        }, () => {
            console.log(`you moved file(s) from ${toCopy} to ${copyTo}`)
        })
    }
}

module.exports = { copy };