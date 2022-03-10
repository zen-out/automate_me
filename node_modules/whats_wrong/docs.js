const explain_me = require("explain_me")

// // make sure all your files in src folder are commented. 
// // sets up package.json 
explain_me.addScript("whats_wrong")
    //     // adds scripts for compile, build, adds babel and webpack to folder
explain_me.makeGlobal("whats_wrong")
    //     // run after you are finished 
explain_me.readme("whats_wrong")
    //     // removes js doc.json and replaces it with module name and video
    //     // runs command for you 
explain_me.html("whats_wrong")
    //     // exports module from dist 
explain_me.addIndex("whats_wrong")
    // explain_me.copyHTML("whats_wrong")