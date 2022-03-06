# automate_me

quick way to create and run shell scripts 
const automate_me = require("automate_me")

    // creates a file called hello.sh in your root folder and makes it executable
automate_me.createFile("hello")

// runs your shell script
automate_me.runFile("hello")

// just runs command
automate_me.runCommand("echo 'hello'")[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)![NPM Downloads](https://img.shields.io/npm/dw/automate_me)
## Functions

<dl>
<dt><a href="#runFile">runFile(fileName)</a> ⇒ <code>any</code></dt>
<dd><p>Will run .sh file</p>
</dd>
<dt><a href="#runCommand">runCommand(command)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#createFile">createFile(fileName)</a> ⇒ <code>any</code></dt>
<dd></dd>
</dl>

<a name="runFile"></a>

## runFile(fileName) ⇒ <code>any</code>
Will run .sh file

**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| fileName | <code>any</code> | 

**Example**  
```js
runFile("script")
```
<a name="runCommand"></a>

## runCommand(command) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| command | <code>any</code> | 

**Example**  
```js
runCommand("echo hello")
```
<a name="createFile"></a>

## createFile(fileName) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| fileName | <code>any</code> | 

**Example**  
```js
createFile("hello")
```