// can import as a module
// or import specific functions
const { T, F, HASHELPER, HAS, COUNTHELPER, COUNT, ATLEASTHELPER, ATLEAST, DOESNOTHAVEHELPER, DOESNOTHAVE, ISTYPEOF, ISTYPEOFHELPER, ENDSWITHHELPER, ENDSWITH, STARTSWITHHELPER, STARTSWITH, TRUNCATE, WRAPHTML, ISLESSHELPER, ISLESS } = require("../module")

// module.exports + { STARTSWITH, ENDSWITH, ISTYPEOF, DOESNOTHAVE, ATLEAST, COUNTHELPER, HAS, T, F }
describe("develop simple way of testing elements of divs in strings", () => {
    it('the problem is that i want to see if there were at least 9 instances passed in', () => {
        COUNT("hello hellodi", "div", 2)
        F(COUNTHELPER("div div div", "div", 9))
        F(COUNTHELPER("hello hellodi", "div", 2))
        F(COUNTHELPER("div div div", "div", 9)) // false
        F(COUNTHELPER("hello hellodi", "div", 2)) // false
        T(COUNTHELPER("hello hellodi", "hello", 2)) // true 
        T(COUNTHELPER("divdiv<div>{{<div>", "div", 4)) // true

        COUNT("div div div", "div", 9) // false
        COUNT("hello hellodi", "div", 2) // false
        COUNT("hello hellodi", "hello", 2) // true 
        COUNT("divdiv<div>{{<div>", "div", 4) // true
    });

    it("will accurately depict if value one is less than value two", () => {
        T(ISLESSHELPER("a", "b", "string"))
        T(ISLESSHELPER(1, 2, "number"))
        T(ISLESSHELPER("Dec 11, 1993", "Dec 11, 1994", "date"))
        F(ISLESSHELPER("b", "a", "string"))
        F(ISLESSHELPER(2, 1, "number"))
        F(ISLESSHELPER("Dec 11, 1996", "Dec 11, 1995", "date"))
        ISLESS("a", "b", "string")
        ISLESS(1, 2, "number")
        ISLESS("Dec 11, 1993", "Dec 11, 1994", "date")
        ISLESS("b", "a", "string")
        ISLESS(2, 1, "number")
        ISLESS("Dec 11, 1996", "Dec 11, 1995", "date")
    })

    it('the problem is that the syntax is annoying', () => {
        T(HASHELPER("div div", "div")) // true 
        F(HASHELPER("DIV", "div")) // false
        F(HASHELPER("dispaiv", "div")) // false
        T(HASHELPER("div div div", "div")) // 
        HAS("div div", "div") // true 
        HAS("DIV", "div") // false
        HAS("dispaiv", "div") // false
        HAS("div div div", "div") // 
    });
    it("has at least number of instances, i guess", () => {
        T(ATLEASTHELPER("div div", "div", 1)) //true 
        T(ATLEASTHELPER("div div", "div", 2)) //true 
        F(ATLEASTHELPER("div div", "div", 3)) //false 
        ATLEAST("div div", "div", 1) //true 
        ATLEAST("div div", "div", 2) //true 
        ATLEAST("div div", "div", 3) //false 
    })
    it('you know you have to make things A LOT simpler to test. you can create a set of functions that see if a string includes another set of strings, really, thats about it lol ', () => {
        F(DOESNOTHAVEHELPER("{{>", ">")) // false (matches the full instance)
        T(DOESNOTHAVEHELPER("{{>", "asdf")) // false (matches the full instance)
        DOESNOTHAVE("{{>", ">") // false (matches the full instance)
        DOESNOTHAVE("{{>", "asdf")
    });
    it('you know you have to make things A LOT simpler to test. you can create a set of functions that see if a string includes another set of strings, really, thats about it lol ', () => {
        ISTYPEOF({ "hello": "whatsup" }, "object")
        ISTYPEOF("imaball", "string")
        ISTYPEOF(["asdf"], "array")
        ISTYPEOF(false, "boolean")
    });

    it("starts with", () => {
        T(STARTSWITHHELPER("hello", "h"))
        F(STARTSWITHHELPER("hello", "b"))
        STARTSWITH("hello", "h")
        STARTSWITH("hello", "b")
    })
    it("ends with", () => {
        F(ENDSWITHHELPER("HELLO", "o"))
        T(ENDSWITHHELPER("<div></div>", "</div>"))
        ENDSWITH("HELLO", "o")
        ENDSWITH("<div></div>", "</div>")
    })
    it("tests types", () => {
        let testOne = ISTYPEOFHELPER(new Date(), "date")
            // console.log("🚀 ~ file: is.js ~ line 67 ~ testOne", testOne)
        T(testOne)
        let testTwo = ISTYPEOFHELPER([3, 2, 1], "array")
            // console.log("🚀 ~ file: is.js ~ line 70 ~ testTwo", testTwo)
        T(testTwo)
        let testThree = ISTYPEOFHELPER(3, "number")
            // console.log("🚀 ~ file: is.js ~ line 73 ~ testThree", testThree)
        T(testThree)
    })
})