# define_me
[define_me - start here](https://zen-out.github.io/packages/define_me)
[![here](https://github.com/zen-out/zen-out.github.io/blob/master/assets/images/define_me.png)](https://github.com/zen-out/zen-out.github.io/blob/master/assets/images/define_me.png)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/define_me)
## Instructions: 
```npm install define_me ``` 
 ``` const define_me =  require('define_me')```

## If utilizing in html...: 
```html
<script src="./node_modules/define_me/index.js"></script> 
  <script>
        $(() => {

            let getThis = define_me.containsThis(".git", define_me.git);
            console.log("🚀 ~ file: playground.js ~ line 4 ~ getThis", getThis)
            let checkDate = define_me.containsThis("March 20 2012", define_me.stringDate)
            console.log("🚀 ~ file: playground.js ~ line 6 ~ checkDate", checkDate)
        })
    </script>
    ``` 
## Functions

<dl>
<dt><a href="#capitalizeFirstLetter">capitalizeFirstLetter(string, regexp)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#containsThis">containsThis(string, regexp)</a> ⇒ <code>any</code></dt>
<dd></dd>
</dl>

<a name="capitalizeFirstLetter"></a>

## capitalizeFirstLetter(string, regexp) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param  | Type             |
|--------|------------------|
| string | <code>any</code> |
| regexp | <code>any</code> |

**Example**  
```js
let getThis = define_me.containsThis(".git", define_me.git)
console.log("🚀 ~ file: playground.js ~ line 4 ~ getThis", getThis)
```
<a name="containsThis"></a>

## containsThis(string, regexp) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-07  
**Author**: zen-out  

| Param  | Type             |
|--------|------------------|
| string | <code>any</code> |
| regexp | <code>any</code> |

**Example**  
```js
let getThis = define_me.containsThis(".git", define_me.git);
let checkDate = define_me.containsThis("March 20 2012", define_me.stringDate)
let output3 = define_me.containsThis("22:44", define_me.hhmm)
let output10 = define_me.containsThis("01/12/2022", define_me.dashDDMMYYYY)
let output11 = define_me.containsThis("2022/02/02", define_me.dashYYYYMMDD)
let output6 = define_me.containsThis("14-1-2022", define_me.hyphenDDMMYYYY)
let output7 = define_me.containsThis("13-01-2018", define_me.hyphenDDMMYYYY)
let output5 = define_me.containsThis("2019-2-10", define_me.hyphenYYYYMMDD)
let output4 = define_me.containsThis("2020-02-22", define_me.hyphenYYYYMMDD)
let output12 = define_me.containsThis("Mar 2 2019", define_me.stringDate)
let output14 = define_me.containsThis("Mar 2 2022", define_me.stringDate)
let trueThis = define_me.containsThis("digital", define_mehhmmss)
```