const { formatDateTime } = require("format_date_time_moment/node")
const S = require("string")
const _ = require("lodash")
const chai = require("chai")
const assert = chai.assert
    /**
     * @example
     * it('', () => {
            F(COUNTHELPER("hello hellodi", "div", 2)) // false
            T(COUNTHELPER("hello hellodi", "hello", 2)) // true 
        });
     * @author zen-out
             * @date 2022-02-10
     * @param {any} type
     * @param {any} item
     * @param {any} amount
     * @returns {any}
     */
function COUNTHELPER(type, item, amount) {
    var isArr = Array.isArray(type);
    let counts;
    if (isArr) {
        let finalCount = _.countBy(arr, (eachOne) => {
            eachOne === item
        });
        let getBoolean = finalCount === amount;
        counts = getBoolean
    } else if (typeof type === "string") {
        let getStringCount = S(type).count(item);
        let stringIncludes = getStringCount === amount;
        counts = stringIncludes
    }
    return counts;
}


/**
 * @example
 * it('', () => {
        t.COUNT("div div div", "div", 9)
        COUNT("div div div", "div", 9) // false
        COUNT("hello hellodi", "div", 2) // false
        COUNT("hello hellodi", "hello", 2) // true 
        COUNT("divdiv<div>{{<div>", "div", 4) // true
    });
 * @author zen-out
         * @date 2022-02-10
 * @param {any} type
 * @param {any} item
 * @param {any} amount
 * @returns {any}
 */
function COUNT(type, item, amount) {
    let getBoolean = COUNTHELPER(type, item, amount)
    if (getBoolean) {
        assert.isTrue(getBoolean)
    } else {
        assert.isFalse(getBoolean)
    }
}


/**
 * @example
 * it("", () => {
        T(ATLEASTHELPER("div div", "div", 1)) //true 
        T(ATLEASTHELPER("div div", "div", 2)) //true 
        F(ATLEASTHELPER("div div", "div", 3)) //false 
    })
 * @author zen-out
         * @date 2022-02-10
 * @param {any} type
 * @param {any} item
 * @param {any} amount
 * @returns {any}
 */
function ATLEASTHELPER(type, item, amount) {
    var isArr = Array.isArray(type);
    let counts;
    if (isArr) {
        counts = _.countBy(arr, (eachOne) => {
            eachOne === item
        });

    } else if (typeof type === "string") {
        counts = S(type).count(item);
    }
    if (counts >= amount) {
        return true;
    } else {
        return false;
    }
}
/**
 * @example
 * it("", () => {
        ATLEAST("div div", "div", 1) //true 
        ATLEAST("div div", "div", 2) //true 
        ATLEAST("div div", "div", 3) //false 
    })
 * @author zen-out
         * @date 2022-02-10
 * @param {any} type
 * @param {any} item
 * @param {any} amount
 * @returns {any}
 */
function ATLEAST(type, item, amount) {
    let getBoolean = ATLEASTHELPER(type, item, amount)
    if (getBoolean) {
        assert.isTrue(getBoolean)
    } else {
        assert.isFalse(getBoolean)
    }
}



/**
 * @example
 *  T(ISLESSHELPER("a", "b", "string"))
        T(ISLESSHELPER(1, 2, "number"))
        T(ISLESSHELPER("Dec 11, 1993", "Dec 11, 1994", "date"))
        F(ISLESSHELPER("b", "a", "string"))
        F(ISLESSHELPER(2, 1, "number"))
        F(ISLESSHELPER("Dec 11, 1996", "Dec 11, 1995", "date"))
 * @date 2022-02-17
 * @param {any} first
 * @param {any} second
 * @param {any} type
 * @returns {any}
 */
function ISLESSHELPER(first, second, type) {
    if (type === "date") {
        return formatDateTime.isBefore(first, second)
    } else if (type === "number") {
        if (first <= second) {
            return true;
        } else {
            return false;
        }
    } else if (type === "string") {
        let dict = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        let lowerCased = first.charAt(0).toLowerCase()
        let lowerCasedSecond = second.charAt(0).toLowerCase()
        let indexFirst = dict.indexOf(lowerCased)
        let indexLast = dict.indexOf(lowerCasedSecond)
        if (indexFirst <= indexLast) {
            return true;
        } else { return false; }


    } else {
        console.log("not sure what type")
    }
}

/**
 * @example 
 * ISLESS("a", "b", "string")
        ISLESS(1, 2, "number")
        ISLESS("Dec 11, 1993", "Dec 11, 1994", "date")
        ISLESS("b", "a", "string")
        ISLESS(2, 1, "number")
        ISLESS("Dec 11, 1996", "Dec 11, 1995", "date")
 * @date 2022-02-17
 * @param {any} one
 * @param {any} two
 * @param {any} type
 * @returns {any}
 */
function ISLESS(one, two, type) {
    let getBoolean = ISLESSHELPER(one, two, type)
    if (getBoolean) {
        assert.isTrue(getBoolean)
    } else {
        assert.isFalse(getBoolean)
    }
}

module.exports = { ISLESS, ISLESSHELPER, COUNT, COUNTHELPER, ATLEAST, ATLEASTHELPER }