# whats_wrong
[whats_wrong - start here](https://zen-out.github.io/packages/whats_wrong)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/whats_wrong)
## Instructions: 
```npm install whats_wrong ``` 
 ``` const whats_wrong =  require('whats_wrong')```

## If utilizing in html...: 
```  <script src="https://cdn.jsdelivr.net/npm/whats_wrong@1.1.0/dist/index.js"></script> ``` 
 ``` const output =  whats_wrong.upset("error", "location", "expected")```

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