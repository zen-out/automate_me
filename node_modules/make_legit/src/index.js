import { trimObj, trimArr, clean } from "./clean.js"
import { isDate, getType } from './getType.js'
import { formatDate, formatNumber, formatArray, formatObject, formatString, formatBoolean } from './format.js'

/**
 * format(data, type)
 * @date 2022-03-03
 * @param {any} data
 * @param {string} date, string, array, object, boolean or number
 * @returns {any}
 */
function format(data, type) {
    let whatsThis = getType(data)
    if (whatsThis === type) {
        return clean(data);
    } else {
        if (type === "date") {
            return formatDate(data, type)
        } else if (type === "string") {
            return formatString(data, type)
        } else if (type === "array") {
            let arr = formatArray(data, type)
            return clean(arr)
        } else if (type === "object") {
            let obj = formatObject(data, type)
            return clean(obj)
        } else if (type === "boolean") {
            return formatBoolean(data, type)
        } else if (type === "number") {
            return formatNumber(data, type)
        } else {
            return undefined
        }
    }

}

export { format, isDate, trimObj, getType, clean, trimArr, formatDate, formatNumber, formatArray, formatObject, formatString, formatBoolean }