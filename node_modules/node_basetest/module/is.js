const S = require("string")
const _ = require("lodash")
const chai = require("chai")
const assert = chai.assert

/**
 * @example
 * it("my fav part of coding is making things", () => {
        T(STARTSWITHHELPER("hello", "h"))
    })
 * @author zen-out
         * @date 2022-02-10
 * @param {any} value
 * @returns {any}
 */
function T(value) {
    assert.isTrue(value)
}

/**
 * @example
 * it("but in order to code well", () => {
        F(ATLEASTHELPER("div div", "div", 3)) //false 
    })
 * @author zen-out
         * @date 2022-02-10
 * @param {any} value
 * @returns {any}
 */
function F(value) {
    assert.isFalse(value)
}



/**
 * ISTYPEOFHELPER
 * @date 2022-03-01
 * @param {any} data
 * @param {any} type
 * @returns {any}
 */
function ISTYPEOFHELPER(data, type) {
    if (data instanceof Date && type === "date") {
        return true
    } else if (type === "array" && Array.isArray(data)) {
        return true;
    } else if (type === "object" && typeof data === "object") {
        return true
    } else if (type === "string" && typeof data === "string") {
        return true
    } else if (type === "number" && typeof data === "number") {
        return true
    } else if (type === "boolean" && typeof data === "boolean") {
        let doubleCheck = S(data).toBoolean()
        if (doubleCheck === true) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
/**
 * @example
 * it('y ', () => {
        ISTYPEOF({ "hello": "whatsup" }, "object")
        ISTYPEOF("imaball", "string")
        ISTYPEOF(["asdf"], "array")
        ISTYPEOF(false, "boolean")
    });
 * @author zen-out
         * @date 2022-02-10
 * @param {any} data
 * @param {any} type
 * @returns {any}
 */
function ISTYPEOF(data, type) {
    let getBoolean = ISTYPEOFHELPER(data, type)
    if (getBoolean) {
        assert.isTrue(getBoolean)
    } else {
        assert.isFalse(getBoolean)
    }
}


module.exports = { T, F, ISTYPEOF, ISTYPEOFHELPER }