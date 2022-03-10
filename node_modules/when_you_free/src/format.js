import { upset } from "whats_wrong"
import { getType, catchError } from "./getType"

/**
 * @example
 * getReadableFormat("Dec 11, 2012", "from") in 2 months
 * getReadableFormat("Dec 11, 2012", "to") 2 months ago
 * @author zen-out
 * @date 2022-01-13
 * @param {any} getDate
 * @param {any} type
 * @returns {string}
 */
export function getReadableFormat(getDate, type = "from") {
    let formatted = getType(getDate)
    let seeIfValid = catchError(formatted)
    if (!seeIfValid.error) {
        if (type === "from") {
            return formatted.fromNow()
        } else {
            return formatted.toNow()
        }
    } else {
        return upset("something wrong with date", "format.js")
    }
}

/**
 * @example 
 * let formatted1 = when_you_free.format(dateTime["one"], "ll")
 * let formatted2 = when_you_free.format(dateTime["one"], "LL")
 * @author zen-out
 * @date 2022-03-06
 * @param {any} date
 * @param {any}  type
 * @returns {any}
 */
export function format(date, type) {
    let formats = {
        localInput: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
        dateInput: 'YYYY-MM-DD', // <input type="date" />
        timeInput: 'HH:mm:ss', // <input type="time" step="1" />
        weekInput: 'GGGG-[W]WW', // <input type="week" />
        monthInput: 'YYYY-MM', // <input type="month" />, 
        mmmddyyyy: "ll",
        mmmmddyyyy: "LL"

    };
    let getDate = getType(date)
    let seeIfValid = catchError(getDate)
        // console.log(seeIfValid, "valid")
    if (seeIfValid) {
        if (formats[type]) {
            return getDate.format(formats[type])
        } else {
            return getDate.format(type)
        }
    } else {
        return seeIfValid
    }

}

/**
 * @example
 * let digitalOne = when_you_free.digitalToSeconds("11:22")
 * @author zen-out
 * @date 2022-03-07
 * @param {any} string
 * @returns {any}
 */
export function digitalToSeconds(string) {
    let getType = format(string, "hh:mm:ss")
    if (typeof getType === "string") {
        let spliced = getType.split(":")
        let hour = parseInt(spliced[0])
        let min = parseInt(spliced[1])
        let sec = parseInt(spliced[2])
        let totalHour = hour * 60 * 60
        let totalMin = min * 60
        let total = totalHour + totalMin + sec
        return total;
    } else {
        return upset("something wrong with date", "format.js")
    }
}

/**
 * @example
 * formatDateToPost(stringInput)
 * @author zen-out
 * @date 2022-01-13
 * @param {any} stringInput
 * @returns {date}
 */
export function formatDateToPost(stringInput) {
    let getDate = getType(stringInput)
    let seeIfValid = catchError(getDate)
    if (seeIfValid !== true) {
        return seeIfValid
    } else {
        let proper = getDate.toDate()
        return new Date(proper);
    }
}