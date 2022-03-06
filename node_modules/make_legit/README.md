Problem: It's hard to format dates the way you want them to 

An easy way to clean your array and objects. It will also remove undefined values 

``` 
npm install make_legit 
```

 = [ ] import 
 ```
 const make_legit = require("make_legit")

let shouldBeString = make_legit.format(3, "string")
console.log("🚀 ~ file: playground.js ~ line 3 ~ shouldBeString", shouldBeString)
let shouldBeString2 = make_legit.format({ "start": 2, "edit": 3, "end": 4 }, "string")
console.log("🚀 ~ file: playground.js ~ line 5 ~ shouldBeString2", shouldBeString2)
let shouldBeString3 = make_legit.format([2, 3, 4], "string")
console.log("🚀 ~ file: playground.js ~ line 7 ~ shouldBeString", shouldBeString3)
let shouldTrim = make_legit.format("  trim white space ", "string")
console.log("🚀 ~ file: playground.js ~ line 9 ~ shouldTrim", shouldTrim)
let shouldTrim2 = make_legit.format({ "a": "fffff      f   " }, "object")
console.log("🚀 ~ file: playground.js ~ line 11 ~ shouldTrim", shouldTrim2)
let removeUNdefined = make_legit.format({ id: undefined, name: "lesley     " }, "object")
console.log("🚀 ~ file: playground.js ~ line 13 ~ removeUNdefined", removeUNdefined)
let boolean = make_legit.format(false, "boolean")
console.log("🚀 ~ file: playground.js ~ line 14 ~ boolean", boolean)
let getBoolean = make_legit.format("true", "boolean")
console.log("🚀 ~ file: playground.js ~ line 17 ~ getBoolean", getBoolean)
let num = make_legit.format("3", "number")
console.log("🚀 ~ file: playground.js ~ line 19 ~ num", num)
let toPost = make_legit.format(new Date(), "date")

console.log("🚀 ~ file: playground.js ~ line 20 ~ toPost", toPost)
 ```

    * [getType(data)](#MakeLegit+getType) ⇒ <code>string</code>
    * [clean(data)](#MakeLegit+clean) ⇒ <code>any</code>
    * [format(data, date,)](#MakeLegit+format) ⇒ <code>any</code>
    * [trimObj(obj)](#MakeLegit+trimObj) ⇒ <code>any</code>
    * [trimArr(arr)](#MakeLegit+trimArr) ⇒ <code>array</code>
    * [formatDate(data)](#MakeLegit+formatDate) ⇒ <code>date</code>
    * [formatNumber(data, type)](#MakeLegit+formatNumber) ⇒ <code>number</code>
    * [formatArray(data)](#MakeLegit+formatArray) ⇒ <code>array</code>
    * [formatObject(data)](#MakeLegit+formatObject) ⇒ <code>object</code>
    * [formatString(data)](#MakeLegit+formatString) ⇒ <code>string</code>
    * [formatBoolean(data)](#MakeLegit+formatBoolean) ⇒ <code>boolean</code>

<a name="new_MakeLegit_new"></a>

### new MakeLegit(key)
makeLegit.getOne("boolean")


| Param | Type             |
|-------|------------------|
| key   | <code>any</code> |

<a name="MakeLegit+getType"></a>

### makeLegit.getType(data) ⇒ <code>string</code>
getType(data)


**Returns**: <code>string</code> - data, number, array, string object, boolean undefined  
**Date**: 2022-03-03  

| Param | Type             |
|-------|------------------|
| data  | <code>any</code> |

<a name="MakeLegit+clean"></a>

### makeLegit.clean(data) ⇒ <code>any</code>
clean(data)


**Date**: 2022-03-03  

| Param | Type             |
|-------|------------------|
| data  | <code>any</code> |

<a name="MakeLegit+format"></a>

### makeLegit.format(data, date,) ⇒ <code>any</code>
format(data, type)


**Date**: 2022-03-03  

| Param | Type                | Description                              |
|-------|---------------------|------------------------------------------|
| data  | <code>any</code>    |                                          |
| date, | <code>string</code> | string, array, object, boolean or number |

<a name="MakeLegit+trimObj"></a>

### makeLegit.trimObj(obj) ⇒ <code>any</code>
trimObj(obj)


**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| obj   | <code>any</code> |

<a name="MakeLegit+trimArr"></a>

### makeLegit.trimArr(arr) ⇒ <code>array</code>
trimArr(arr)


**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| arr   | <code>any</code> |

<a name="MakeLegit+formatDate"></a>

### makeLegit.formatDate(data) ⇒ <code>date</code>
formatDate(data)


**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| data  | <code>any</code> |

<a name="MakeLegit+formatNumber"></a>

### makeLegit.formatNumber(data, type) ⇒ <code>number</code>
formatNumber(data)


**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| data  | <code>any</code> |
| type  | <code>any</code> |

<a name="MakeLegit+formatArray"></a>

### makeLegit.formatArray(data) ⇒ <code>array</code>
formatArray(data)


**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| data  | <code>any</code> |

<a name="MakeLegit+formatObject"></a>

### makeLegit.formatObject(data) ⇒ <code>object</code>
formatObject(data)


**Date**: 2022-03-03  

| Param | Type             |
|-------|------------------|
| data  | <code>any</code> |

<a name="MakeLegit+formatString"></a>

### makeLegit.formatString(data) ⇒ <code>string</code>
formatString(data)


**Date**: 2022-03-03  

| Param | Type             |
|-------|------------------|
| data  | <code>any</code> |

<a name="MakeLegit+formatBoolean"></a>

### makeLegit.formatBoolean(data) ⇒ <code>boolean</code>
formatBoolean(data)


**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| data  | <code>any</code> |

