import check from "check-types"
import define_me from "define_me"

export function isDate(date) {
    if (define_me.contains(date, define_me.hhmm)) {
        return true;
    } else if (define_me.contains(date.define_me.hhmmss)) {
        return true;
    } else if (define_me.contains(date.define_me.dashDDMMYYYY)) {
        return true;
    } else if (define_me.contains(date.define_me.dashYYYYMMDD)) {
        return true;
    } else if (define_me.contains(date.define_me.hyphenDDMMYYYY)) {
        return true;
    } else if (define_me.contains(date.define_me.hyphenYYYYMMDD)) {

        return true;

    } else if (define_me.contains(date.define_me.yyyymmdd)) {
        return true;
    } else if (define_me.contains(date.define_me.knexDate)) {
        return true;
    } else if (define_me.contains(date.define_me.stringDate)) {} else if (define_me.contains()) {

    } else if (date.isValid()) {

    }
}
/**
 * @example 
 * getType(data)
 * @date 2022-03-03
 * @param {any} data
 * @returns {string} data, number, array, string object, boolean undefined
 */
export function getType(data) {
    if (data instanceof Date) {
        return "date"
    } else
    if (check.number(data)) {
        return "number"
    } else if (check.array(data)) {
        return "array"
    } else if (check.string(data)) {
        return "string"
    } else if (check.object(data)) {
        return "object"
    } else if (check.boolean(data)) { return "boolean" } {
        return undefined;
    }
}