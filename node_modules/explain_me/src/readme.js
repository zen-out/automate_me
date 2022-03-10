const fs = require("fs")
const jsdoc2md = require('jsdoc-to-markdown')
const ccc = require("clear_concise_creative")

function addInstructions(moduleName) {
    let readme = ccc.readFile("./README.md")
    let instructions = "## If install on html...: \n```" + `<script src="https://cdn.jsdelivr.net/npm/${moduleName}/dist/index.js"></script>` + " ``` \n ``` " + `\nconst output` + " =  " + `${moduleName}.method(parameter)` + "```\n"
    let final = instructions + readme
    ccc.writeFile("./README.md", final)
    return final
}

/**
 * @example
 * readme(moduleName, videoLink)
 * @author zen-out
 * @date 2022-03-08
 * @param {any} moduleName = undefined
 * @param {any}  video = undefined
 */
function readme(moduleName = undefined, video = undefined, intro = undefined) {

    let badges = ""
    let getData = jsdoc2md.renderSync({ files: "src/**.js" })
    if (moduleName) {
        badges += `# ${moduleName}\n[${moduleName} - start here](https://zen-out.github.io/packages/${moduleName})\n`
        if (video) {
            badges += `[![here](${video})](${video})`
        }
        if (intro) {
            badges += ccc.readFile(`./${intro}`)
        }
        badges += "\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" + `\n![NPM Downloads](https://img.shields.io/npm/dw/${moduleName})`
        badges += "\n## Instructions: \n```" + `npm install ${moduleName}` + " ``` \n ``` " + `const ${moduleName}` + " =  " + `require('${moduleName}')` + "```\n"
        badges += "\n## If utilizing in html...: \n```" + `<script src="https://cdn.jsdelivr.net/npm/${moduleName}/dist/index.js"></script>` + " ``` \n ``` " + `const output` + " =  " + `${moduleName}.method(parameter)` + "```\n"
    }
    let data = badges + "\n" + getData;
    ccc.writeFile("./README.md", data)
}


module.exports = { addInstructions, readme }