# automate_me

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/automate_me)
[Play with docs](https://zen-out.github.io/modules/automate_me.html)
## Instructions: 

```js
npm install automate_me
const automate_me =  require('automate_me')
```

## If utilizing in html...: 
```html
<script src="./node_modules/automate_me/index.js"></script>
<script> 
$(()=> { 
     const output =  automate_me.method(parameter)
 })
</script>
```


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
// lets say you have a script.sh file
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
// 
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
createFile("hello") // will create hello.sh file
```
