const { ISTYPEOF, HAS } = require("node_basetest")
const make_legit = require("../index.js")
describe("final test", () => {
    it("should run these values", () => {
        let shouldBeString = make_legit.format(3, "string")
        console.log("🚀 ~ file: playground.js ~ line 3 ~ shouldBeString", shouldBeString)
        ISTYPEOF(shouldBeString, "string")
        let shouldBeString2 = make_legit.format({ "start": 2, "edit": 3, "end": 4 }, "string")

        ISTYPEOF(shouldBeString2, "string")
        console.log("🚀 ~ file: playground.js ~ line 5 ~ shouldBeString2", shouldBeString2)

        let shouldBeString3 = make_legit.format([2, 3, 4], "string")

        ISTYPEOF(shouldBeString3, "string")
        console.log("🚀 ~ file: playground.js ~ line 7 ~ shouldBeString", shouldBeString3)
        let shouldTrim = make_legit.format("  trim white space ", "string")

        ISTYPEOF(shouldTrim, "string")
        console.log("🚀 ~ file: playground.js ~ line 9 ~ shouldTrim", shouldTrim)
        let shouldTrim2 = make_legit.format({ "a": "fffff      f   " }, "object")

        ISTYPEOF(shouldTrim2, "object")
        console.log("🚀 ~ file: playground.js ~ line 11 ~ shouldTrim", shouldTrim2)

        let boolean = make_legit.format(false, "boolean")

        ISTYPEOF(boolean, "boolean")
        console.log("🚀 ~ file: playground.js ~ line 14 ~ boolean", boolean)
        let getBoolean = make_legit.format("true", "boolean")
        console.log("🚀 ~ file: playground.js ~ line 17 ~ getBoolean", getBoolean)

        ISTYPEOF(getBoolean, "boolean")
        let num = make_legit.format("3", "number")

        ISTYPEOF(num, "boolean")
        console.log("🚀 ~ file: playground.js ~ line 19 ~ num", num)
        let toPost = make_legit.format(new Date(), "date")

        console.log("🚀 ~ file: playground.js ~ line 20 ~ toPost", toPost)
    })
    it("removes undefined", () => {
        let removeUNdefined = make_legit.format({ id: undefined, name: "lesley     " }, "object")

        ISTYPEOF(removeUNdefined, "object")

    })
})