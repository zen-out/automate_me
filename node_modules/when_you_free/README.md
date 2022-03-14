# when_you_free
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/when_you_free)## 

[![here](https://github.com/zen-out/zen-out.github.io/blob/master/assets/images/when_you_free.png)](https://github.com/zen-out/zen-out.github.io/blob/master/assets/images/when_you_free.png)

Instructions: 
```npm install when_you_free ``` 
 ``` const when_you_free =  require('when_you_free')```
 
## If install on html...: 
- be sure to install the moment library 
```   <script src="https://cdn.jsdelivr.net/npm/moment@2.29.1/moment.min.js"></script>
    <script src="./node_modules/when_you_free/index.js"></script> ``` 
 ``` const output =  when_you_free.method(parameter)```

## Functions

<dl>
<dt><a href="#isBefore">isBefore(start, end)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#difference">difference(one, two, type)</a> ⇒ <code>integer</code></dt>
<dd></dd>
<dt><a href="#isBetween">isBetween(target, start, end)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#createHour">createHour(hour, minute, second)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#createMinute">createMinute(minute, second)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#createMonth">createMonth(year, month)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#createDay">createDay(year, month, day)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#createFullDate">createFullDate(year, month, day, hour, minute, second)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#getDuration">getDuration(start, end, type)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#addDurations">addDurations(dateOne, dateTwo)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#getReadableFormat">getReadableFormat(getDate, type)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#format">format(date, type)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#digitalToSeconds">digitalToSeconds(string)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#formatDateToPost">formatDateToPost(stringInput)</a> ⇒ <code>date</code></dt>
<dd></dd>
<dt><a href="#isDate">isDate(date)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#getType">getType(date)</a> ⇒ <code>object</code></dt>
<dd></dd>
<dt><a href="#catchError">catchError(getDate)</a> ⇒ <code>any</code></dt>
<dd></dd>
</dl>

<a name="isBefore"></a>

## isBefore(start, end) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| start | <code>any</code> |
| end   | <code>any</code> |

**Example**  
```js
const when_you_free = require("when_you_free")
letTrue = when_you_free.isBefore("Dec 11, 2012", "Dec 12, 2012")
```
<a name="difference"></a>

## difference(one, two, type) ⇒ <code>integer</code>
**Kind**: global function  
**Date**: 2022-01-13  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| one   | <code>any</code> |
| two   | <code>any</code> |
| type  | <code>any</code> |

**Example**  
```js
let dateHTML = {
    one: "2020-03-01",
    two: "2021-03-01",
    two: "2022-03-01"
}
let dateObject = {
    one: new Date(2010, 1, 1),
    two: new Date(2011, 1, 1),
    three: new Date(2020, 1, 1)
}
 let isTrue3 = when_you_free.difference(dateHTML["one"], dateHTML["two"], "minutes")
let isTrue4 = when_you_free.difference(dateObject["one"], dateObject["two"], "months")
```
<a name="isBetween"></a>

## isBetween(target, start, end) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-07  
**Author**: zen-out  

| Param  | Type             |
|--------|------------------|
| target | <code>any</code> |
| start  | <code>any</code> |
| end    | <code>any</code> |

**Example**  
```js
let dateHTML = {
    one: "2020-03-01",
    two: "2021-03-01",
    two: "2022-03-01"
}

let dateString = {
    one: "Dec 11, 2012",
    two: "Dec 12, 2013",
    three: "Dec 13, 2014"
}
let isTrue3 = when_you_free.isBetween(dateHTML["one"], dateHTML["two"], dateHTML["three"])
let isTrue = when_you_free.isBetween(dateString["one"], dateString["two"], dateString["three"])
```
<a name="createHour"></a>

## createHour(hour, minute, second) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-07  
**Author**: zen-out  

| Param  | Type             |
|--------|------------------|
| hour   | <code>any</code> |
| minute | <code>any</code> |
| second | <code>any</code> |

**Example**  
```js
createHour(hour, minute, second)
```
<a name="createMinute"></a>

## createMinute(minute, second) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-07  
**Author**: zen-out  

| Param  | Type             |
|--------|------------------|
| minute | <code>any</code> |
| second | <code>any</code> |

**Example**  
```js
createMinute(minute, second)
```
<a name="createMonth"></a>

## createMonth(year, month) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-07  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| year  | <code>any</code> |
| month | <code>any</code> |

**Example**  
```js
createMonth(year, month)
```
<a name="createDay"></a>

## createDay(year, month, day) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-07  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| year  | <code>any</code> |
| month | <code>any</code> |
| day   | <code>any</code> |

**Example**  
```js
createDay(year, month, day)
```
<a name="createFullDate"></a>

## createFullDate(year, month, day, hour, minute, second) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-07  
**Author**: zen-out  

| Param  | Type             |
|--------|------------------|
| year   | <code>any</code> |
| month  | <code>any</code> |
| day    | <code>any</code> |
| hour   | <code>any</code> |
| minute | <code>any</code> |
| second | <code>any</code> |

**Example**  
```js
createFullDate(year, month, day, hour, minute, second)
```
<a name="getDuration"></a>

## getDuration(start, end, type) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-07  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| start | <code>any</code> |
| end   | <code>any</code> |
| type  | <code>any</code> |

**Example**  
```js
let getDuration = when_you_free.getDuration("2022-03-01T19:06:31.047Z", "2022-03-01T20:04:32.047Z", "seconds")
```
<a name="addDurations"></a>

## addDurations(dateOne, dateTwo) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-07  
**Author**: zen-out  

| Param   | Type             |
|---------|------------------|
| dateOne | <code>any</code> |
| dateTwo | <code>any</code> |

<a name="getReadableFormat"></a>

## getReadableFormat(getDate, type) ⇒ <code>string</code>
**Kind**: global function  
**Date**: 2022-01-13  
**Author**: zen-out  

| Param   | Type             |
|---------|------------------|
| getDate | <code>any</code> |
| type    | <code>any</code> |

**Example**  
```js
getReadableFormat("Dec 11, 2012", "from") in 2 months
getReadableFormat("Dec 11, 2012", "to") 2 months ago
```
<a name="format"></a>

## format(date, type) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| date  | <code>any</code> |
| type  | <code>any</code> |

**Example**  
```js
let formatted1 = when_you_free.format(dateTime["one"], "ll")
let formatted2 = when_you_free.format(dateTime["one"], "LL")
```
<a name="digitalToSeconds"></a>

## digitalToSeconds(string) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-07  
**Author**: zen-out  

| Param  | Type             |
|--------|------------------|
| string | <code>any</code> |

**Example**  
```js
let digitalOne = when_you_free.digitalToSeconds("11:22")
```
<a name="formatDateToPost"></a>

## formatDateToPost(stringInput) ⇒ <code>date</code>
**Kind**: global function  
**Date**: 2022-01-13  
**Author**: zen-out  

| Param       | Type             |
|-------------|------------------|
| stringInput | <code>any</code> |

**Example**  
```js
formatDateToPost(stringInput)
```
<a name="isDate"></a>

## isDate(date) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-07  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| date  | <code>any</code> |

**Example**  
```js
isDate(date)
```
<a name="getType"></a>

## getType(date) ⇒ <code>object</code>
**Kind**: global function  
**Returns**: <code>object</code> - moment  
**Date**: 2022-03-07  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| date  | <code>any</code> |

**Example**  
```js
getType()
```
<a name="catchError"></a>

## catchError(getDate) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param   | Type             |
|---------|------------------|
| getDate | <code>any</code> |

**Example**  
```js
catchError(getDate)
```