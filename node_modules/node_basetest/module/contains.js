const S = require("string")
const make_legit = require("make_legit")
const _ = require("lodash")
const chai = require("chai")
const assert = chai.assert
    /**********************************************
     * HAS / INCLUDES 
     * ==================================
     * String, array, object, 
     ***********************************************/

/**
 * @example 
 * it('we need to test well', () => {
        T(HASHELPER("div div", "div")) // true 
        F(HASHELPER("DIV", "div")) // false
        F(HASHELPER("dispaiv", "div")) // false
        T(HASHELPER("div div div", "div")) // 
    });
 * @author zen-out
         * @date 2022-02-09
 * @param {any} one
 * @param {any} two
 * @returns {any}
 */
function HASHELPER(one, two) {
    let first = make_legit.format(one, "string")
    let second = make_legit.format(two, "string")
    return S(first).contains(second)

}
/**
 * @example
 * it('the problem is that the syntax is annoying', () => {\
        HAS("div div", "div") // true 
        HAS("DIV", "div") // false
        HAS("dispaiv", "div") // false
        HAS("div div div", "div") // 
    });
 * @author zen-out
         * @date 2022-02-10
 * @param {any} one
 * @param {any} two
 * @returns {any}
 */
function HAS(one, two) {
    let getBoolean = HASHELPER(one, two)
    if (getBoolean) {
        assert.isTrue(getBoolean)
    } else {
        assert.isFalse(getBoolean)
    }
}

/**
 * @example
 *  it("starts with", () => {
        T(STARTSWITHHELPER("hello", "h"))
        F(STARTSWITHHELPER("hello", "b"))
    })
 * @author zen-out
         * @date 2022-02-10
 * @param {any} string
 * @param {any} substring
 * @returns {any}
 */
function STARTSWITHHELPER(string, substring) {
    let getBoolean = S(string).startsWith(substring)
    return getBoolean;
}


/**
 * @example
 * it("starts with", () => {
        STARTSWITH("hello", "h")
        STARTSWITH("hello", "b")
    })
 * @author zen-out
         * @date 2022-02-10
 * @param {any} string
 * @param {any} substring
 * @returns {any}
 */
function STARTSWITH(string, substring) {
    let getBoolean = STARTSWITHHELPER(string, substring)
    if (getBoolean) {
        assert.isTrue(getBoolean, `${string} does start with ${substring}`)
    } else {
        assert.isFalse(getBoolean, `${string} does not start with ${substring}`)
    }
}

/**
 * @example
 *  it("ends with", () => {
        F(ENDSWITHHELPER("HELLO", "o"))
        T(ENDSWITHHELPER("<div></div>", "</div>"))
    })
 * @author zen-out
         * @date 2022-02-10
 * @param {any} string
 * @param {any} substring
 * @returns {any}
 */
function ENDSWITHHELPER(string, substring) {
    let getBoolean = S(string).endsWith(substring)
    return getBoolean
}

/**
 * @example
 * it("ends with", () => {
        ENDSWITH("HELLO", "o")
        ENDSWITH("<div></div>", "</div>")
    })
 * @author zen-out
         * @date 2022-02-10
 * @param {any} string
 * @param {any} substring
 * @returns {any}
 */
function ENDSWITH(string, substring) {
    let getBoolean = ENDSWITHHELPER(string, substring)
    if (getBoolean) {
        assert.isTrue(getBoolean)
    } else {
        assert.isFalse(getBoolean)
    }
}

module.exports = { HAS, HASHELPER, STARTSWITH, STARTSWITHHELPER, ENDSWITH, ENDSWITHHELPER }