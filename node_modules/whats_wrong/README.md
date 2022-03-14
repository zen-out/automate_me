# whats_wrong
[whats_wrong - start here](https://zen-out.github.io/packages/whats_wrong)

[![here](https://github.com/zen-out/zen-out.github.io/blob/master/assets/images/whats_wrong.png)](https://github.com/zen-out/zen-out.github.io/blob/master/assets/images/whats_wrong.png)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/whats_wrong)
## Instructions: 
```npm install whats_wrong ``` 
 ``` const whats_wrong =  require('whats_wrong')```

## If utilizing in html...: 
```html
    <script src="./node_modules/make_legit/index.js"></script>
    <script src="./node_modules/whats_wrong/index.js">
    </script>
    <script>
        $(() => {
            let output = whats_wrong.upset("hello", "nothing", "expected")
            console.log("🚀 ~ file: index.html ~ line 32 ~ output", output)
        })
    </script>
    ```

<a name="upset"></a>

## upset(error, location) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param    | Type             | Description |
|----------|------------------|-------------|
| error    | <code>any</code> |             |
| location | <code>any</code> | = undefined |

**Example**  
```js
const {upset} = require("whats_wrong")
upset("an error", "location")
```