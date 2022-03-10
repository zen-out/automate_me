const fs = require("fs")
const ccc = require("clear_concise_creative")
const automate_me = require("automate_me")

function replaceJSDOCLink(moduleName, video = undefined) {
    if (video) {

        ccc.replaceJSON("./jsdoc.json", ["opts", "theme_opts", "menu"], [{
            "title": "visual instructions",
            "link": video,
            "target": "_blank"
        }, {
            "title": "see npm package",
            "link": `https://www.npmjs.com/package/${moduleName}`,
            "target": "_blank"
        }])
    } else {
        ccc.replaceJSON("./jsdoc.json", ["opts", "theme_opts", "menu"], [{
            "title": "see npm package",
            "link": `https://www.npmjs.com/package/${moduleName}`,
            "target": "_blank"
        }])
    }
    ccc.replaceJSON("./jsdoc.json", ["opts", "theme_opts", "codepen"], {
        "enable_for": [
            "examples"
        ],
        "options": {
            "js_external": `https://cdn.jsdelivr.net/npm/${moduleName}/dist/index.js`,
        }
    })
}

function replaceJSDOCVideo(video) {
    ccc.addToNestedJSON("./node_modules/explain_me/jsdoc.json", ["opts", "theme_opts", "menu"], {
        "title": "visual instructions",
        "link": video,
        "target": "_blank"
    })
}



/**
 * @example
 * html(moduleName, videoLink)
 * @description 
 * - Removes jsdoc.json file
 * - Replaces module and video link 
 * - Runs jsdoc
 * @author zen-out
 * @date 2022-03-08
 * @param {any} moduleName = undefined
 * @param {any}  video = undefined
 */
function html(moduleName = undefined, video = undefined) {
    ccc.writeJSON("./jsdoc.json", "")

    let getJSDOC = ccc.readJSON("./node_modules/explain_me/jsdoc.json")
    ccc.writeJSON("./jsdoc.json", getJSDOC)
    replaceJSDOCLink(moduleName, video)
    automate_me.runCommand(`rm -rf docs && ./node_modules/.bin/jsdoc --configure ./jsdoc.json -d docs --verbose`)
}


function copyHTML(moduleName, fileName = "global") {
    let copyDocs = ccc.readFile(`./docs/${fileName}.html`)
    ccc.writeFile(`../../../../zen-out.github.io/packages/${moduleName}.html`, copyDocs)
}
module.exports = { replaceJSDOCLink, replaceJSDOCVideo, html, copyHTML }