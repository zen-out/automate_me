![NPM Downloads](https://img.shields.io/npm/dw/node_basetest)

### node_basetest

 

## Directions

See example here - [example](https://github.com/lezzles11/node_basetest/tree/master)

1. Install the package 

```
npm install node_basetest
```

2. Import into your test file

```
// can import as a module
const t = require("./index.js")

    // or import specific functions

const { T, F, HASHELPER, HAS, COUNTHELPER, COUNT, ATLEASTHELPER, ATLEAST, DOESNOTHAVEHELPER, DOESNOTHAVE, ISTYPEOF, ENDSWITHHELPER, ENDSWITH, STARTSWITHHELPER, STARTSWITH, TRUNCATE, WRAPHTML } = require("./index.js")

// module.exports + { STARTSWITH, ENDSWITH, ISTYPEOF, DOESNOTHAVE, ATLEAST, COUNTHELPER, HAS, T, F }
describe("develop simple way of testing elements of divs in strings", () => {

    it('the problem is that i want to see if there were at least 9 instances passed in', () => {
        t.COUNT("div div div", "div", 9)
        COUNT("hello hellodi", "div", 2)
        F(COUNTHELPER("div div div", "div", 9))
    })
    })

```
