import moment from "moment"
moment.locale("en")

/**
 * @example
 * createHour(hour, minute, second)
 * @author zen-out
 * @date 2022-03-07
 * @param {any} hour
 * @param {any}  minute
 * @param {any}  second
 * @returns {any}
 */
export function createHour(hour, minute, second) {
    let time = moment({
        hour: hour,
        minute: minute,
        second: second
    })
    return time;
}

/**
 * @example
 * createMinute(minute, second)
 * @author zen-out
 * @date 2022-03-07
 * @param {any} minute
 * @param {any}  second
 * @returns {any}
 */
export function createMinute(minute, second) {
    let time = moment({
        minute: minute,
        second: second
    })
    return time;
}

/**
 * @example
 * createMonth(year, month)
 * @author zen-out
 * @date 2022-03-07
 * @param {any} year
 * @param {any}  month
 * @returns {any}
 */
export function createMonth(year, month) {
    let date = moment({
        year: year,
        month: month,
    })
    return date;
}

/**
 * @example
 * createDay(year, month, day)
 * @author zen-out
 * @date 2022-03-07
 * @param {any} year
 * @param {any}  month
 * @param {any}  day
 * @returns {any}
 */
export function createDay(year, month, day) {
    month = month - 1
    let date = moment({
        year: year,
        month: month,
        day: day
    })
    return date;
}

/**
 * @example
 * createFullDate(year, month, day, hour, minute, second)
 * @author zen-out
 * @date 2022-03-07
 * @param {any} year
 * @param {any}  month
 * @param {any}  day
 * @param {any}  hour
 * @param {any}  minute
 * @param {any}  second
 * @returns {any}
 */
export function createFullDate(year, month, day, hour, minute, second) {
    let full = moment({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second
    })
    return full

}