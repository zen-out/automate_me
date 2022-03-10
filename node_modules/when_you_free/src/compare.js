import { getType, catchError } from "./getType"
import { upset } from "whats_wrong"
/**
 * @example
 * const when_you_free = require("when_you_free")
 * letTrue = when_you_free.isBefore("Dec 11, 2012", "Dec 12, 2012")
 * 
 * @author zen-out
 * @date 2022-03-06
 * @param {any} start
 * @param {any}  end
 * @returns {any}
 */
export function isBefore(start, end) {
    let dateOne = getType(start)
    let dateTwo = getType(end)
    let seeIfValid1 = catchError(dateOne)
    let seeIfValid2 = catchError(dateTwo)
    let isError = seeIfValid1 === true && seeIfValid2 === true
    if (isError === true) {
        let isTrue = dateOne.isBefore(dateTwo)
        return isTrue
    } else {
        return upset("something wrong with date - is before function", "when_you_free/compare.js")
    }
}

/**
      * @example
      * let dateHTML = {
    one: "2020-03-01",
    two: "2021-03-01",
    two: "2022-03-01"
}
      * let dateObject = {
    one: new Date(2010, 1, 1),
    two: new Date(2011, 1, 1),
    three: new Date(2020, 1, 1)
}
      *  let isTrue3 = when_you_free.difference(dateHTML["one"], dateHTML["two"], "minutes")
      * let isTrue4 = when_you_free.difference(dateObject["one"], dateObject["two"], "months")

      * @author zen-out
      * @date 2022-01-13
      * @param {any} one
      * @param {any} two
      * @param {any} type
      * @returns {integer}
      */
export function difference(one, two, type) {
    let dateOne = getType(one)
    let dateTwo = getType(two)
    let seeIfValid = catchError(dateOne)
    let seeIfValid2 = catchError(dateTwo)
    let bothTrue = seeIfValid && seeIfValid2

    if (bothTrue) {
        return Math.abs(dateOne.diff(dateTwo, type))
    } else {
        return upset("something wrong with date - difference function", "when_you_free/compare.js")
    }
}

/**
 * @example
 * let dateHTML = {
    one: "2020-03-01",
    two: "2021-03-01",
    two: "2022-03-01"
}

let dateString = {
    one: "Dec 11, 2012",
    two: "Dec 12, 2013",
    three: "Dec 13, 2014"
}
 * let isTrue3 = when_you_free.isBetween(dateHTML["one"], dateHTML["two"], dateHTML["three"])
let isTrue = when_you_free.isBetween(dateString["one"], dateString["two"], dateString["three"])
 * 
 * @author zen-out
 * @date 2022-03-07
 * @param {any} target
 * @param {any}  start
 * @param {any}  end
 * @returns {any}
 */
export function isBetween(target, start, end) {
    let dateZero = getType(target)
    let dateOne = getType(start)
    let dateTwo = getType(end)
    let seeIfValid = catchError(dateOne)
    let seeIfValid2 = catchError(dateTwo)
    let seeIfValid3 = catchError(dateZero)
    let allTrue = seeIfValid && seeIfValid2 && seeIfValid3
    if (allTrue) {
        let isTrue = dateZero.isBetween(dateOne, dateTwo)
        return isTrue
    } else {
        return upset("something wrong with date - is between function", "when_you_free/compare.js")
    }
}