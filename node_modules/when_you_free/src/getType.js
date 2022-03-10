import moment from "moment"
import { containsThis, hhmm, hhmmss, dashDDMMYYYY, dashYYYYMMDD, hyphenDDMMYYYY, hyphenYYYYMMDD, yyyymmdd, knexDate, stringDate } from "define_me"

import { createHour, createMinute, createMonth, createFullDate, createDay } from "./create"


moment.locale("en")

export function arrStringtoNum(arr) {
    return arr.map(Number);
}

export function handleDigital(hhmm) {
    let split = hhmm.split(":")
    let numbers = arrStringtoNum(split)
    if (split.length === 2) {
        return createMinute(numbers[0], numbers[1])
    } else if (split.length === 3) {
        return createHour(numbers[0], numbers[1], numbers[2])
    }
}

export function handleDashed(ddmmyyyy) {
    let split = ddmmyyyy.split("/")
    let numbers = arrStringtoNum(split)
    if (split[0].length === 4) {
        return createDay(numbers[0], numbers[1], numbers[2])
    } else {
        return createDay(numbers[2], numbers[1], numbers[0])
    }
}

export function handleHyphen(ddmmyyyy) {
    let split = ddmmyyyy.split("-")
    let numbers = arrStringtoNum(split)
    if (split[0].length === 4) {

        return createDay(numbers[0], numbers[1], numbers[2])
    } else {
        return createDay(numbers[2], numbers[1], numbers[0])
    }
}


export function handleNumber(yyyymmdd) {
    let year = yyyymmdd.slice(0, 4)
    let month = yyyymmdd.slice(4, 6)
    let day = yyyymmdd.slice(6, 8)

    return createDay(parseInt(year), parseInt(month), parseInt(day))
}

/**
 * @example
 * isDate(date)
 * @author zen-out
 * @date 2022-03-07
 * @param {any} date
 * @returns {any}
 */
export function isDate(date) {
    if (containsThis(date, hhmm)) {
        return true;
    } else if (containsThis(date, hhmmss)) {
        return true;
    } else if (containsThis(date, dashDDMMYYYY)) {
        return true;
    } else if (containsThis(date, dashYYYYMMDD)) {
        return true;
    } else if (containsThis(date, hyphenDDMMYYYY)) {
        return true;
    } else if (containsThis(date, hyphenYYYYMMDD)) {
        return true;
    } else if (containsThis(date, yyyymmdd)) {
        return true;
    } else if (containsThis(date, knexDate)) {
        return true;
    } else if (containsThis(date, stringDate)) {
        return true;
    } else if (date instanceof Date) {
        return true;
    } else if (moment(date).isValid()) {
        return true;
    } else {
        return false;
    }
}

/**
 * @example
 * getType()
 * @author zen-out
 * @date 2022-03-07
 * @param {any} date
 * @returns {object} moment
 */
export function getType(date) {
    if (containsThis(date, hhmm)) {
        return handleDigital(date)
    } else if (containsThis(date, hhmmss)) {
        return handleDigital(date)
    } else if (containsThis(date, dashDDMMYYYY)) {
        return handleDashed(date)
    } else if (containsThis(date, dashYYYYMMDD)) {
        return handleDashed(date)
    } else if (containsThis(date, hyphenDDMMYYYY)) {
        return handleHyphen(date)
            // return moment(date)
    } else if (containsThis(date, hyphenYYYYMMDD)) {
        return handleHyphen(date)
    } else if (containsThis(date, yyyymmdd)) {
        return handleNumber(date)
    } else if (containsThis(date, knexDate)) {
        return moment(date)
    } else if (containsThis(date, stringDate)) {
        return moment(date)
    } else if (date instanceof Date) {
        return moment(date)
    } else if (moment(date).isValid()) {
        return moment(date)
    } else {
        return false;
    }
}


/**
 * @example
 * catchError(getDate)
 * @author zen-out
 * @date 2022-03-06
 * @param {any} getDate
 * @returns {any}
 */
export function catchError(getDate) {
    if (getDate === undefined || typeof getDate !== "object") {
        return upset("not a valid date" + getDate, "when_you_free module")
    } else {
        return true;
    }
}