const automate_me = require("./index.js")
    // creates a file called hello.sh in your root folder and makes it executable
automate_me.createFile("hello")

// runs your shell script
automate_me.runFile("hello")

// just runs command
automate_me.runCommand("echo 'hello'")