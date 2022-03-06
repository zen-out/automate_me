/**********************************************
 * Organization of Folders
 * ==================================
 * problem: we need to have a place for everything. 
 * what should be: we should be quite organized in our code
 * what actually is: it's hard, like, really hard, to keep our directories and things organized. 
 * hypothesis: have a better method of keeping things organized, follow the marie kondon methodology in cleaning folders, function, classes, files in your work, spark complete joy here. 
 * 
 * Feature: 
 * 
 * 
 ********************************************/
const ccc = require("./index.js")
const fs = require("fs-extra")
const test_waters = require("test_waters")
const { see, hourglass } = require("code_clarity")
ccc.addToNestedJSON("./sample.json", ["opts", "theme_opts", "menu"], {
        "title": "2 instructions",
        "link": "hi",
        "target": "_blank"
    })
    // ccc.appendFile("./readMe.txt", { yo: "whatsup" })
    // let objectDir = ["opts", "theme_opts", "codepen"]
    // ccc.replaceJSON("./data/appendToMe.json", ["opts", "theme_opts", "codepen"], {
    //     "enable_for": [
    //         "examples"
    //     ],
    //     "options": {
    //         "js_external": "hellooo",
    //         "js_pre_processor": "babel"
    //     }
    // })

// let scripts = ccc.getJSONObject("./package.json", ["scripts"])
// console.log("🚀 ~ file: json.js ~ line 116 ~ scripts", scripts)


// let addedCommands = ccc.mergeJSONObject("./package.json", ["scripts"], {
//     "play": "node playground.js",
//     "deploy": "git add . && git commit -m 'updated' && git push && npm version patch && npm publish",
// })f