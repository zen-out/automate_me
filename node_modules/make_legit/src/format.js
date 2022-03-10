import { formatDateToPost, format } from 'when_you_free'
import { getType } from "./getType"


/**
 * @example
 * formatDate(data)
 * @author zen-out
 * @date 2022-03-03
 * @param {any} data
 * @returns {date}
 */
export function formatDate(data) {
    let whatsThis = getType(data)
    if (whatsThis === "string") {
        let formatDate = formatDateToPost(data)
        return formatDate
    } else if (whatsThis === "object") {
        let formatDate = formatDateToPost(data)
        return new Date(formatDate)
    } else {
        return undefined
    }
    // array  
}



/**
 * @example
 * formatNumber(data)
 * @author zen-out
 * @date 2022-03-03
 * @param {any} data
 * @param {any} type
 * @returns {number}
 */
export function formatNumber(data) {
    let num;
    // string 
    let whatsThis = getType(data)
    if (whatsThis === "string") {
        num = parseInt(data)
    } else if (whatsThis === "array") {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            // console.log(data[i])
            if (typeof data[i] === "number") {
                sum += data[i]
            }
        }
        num = sum;
    } else if (whatsThis === "date") {
        let formatDate = format(data, "YYYYMMDDHHMMSS")
        let parsed = parseInt(formatDate)
        num = parsed;
    } else {
        num = undefined
    }
    if (isNaN(num)) {
        return undefined;
    } else {
        return num;
    }
}

/**
 * @example
 * formatArray(data)
 * @author zen-out
 * @date 2022-03-03
 * @param {any} data
 * @returns {array}
 */
export function formatArray(data) {
    // string 
    let newArr = []
    let whatsThis = getType(data)
    if (whatsThis === "string") {
        newArr.push(data)

    } else if (whatsThis === "number") {
        newArr.push(data)
    } else if (whatsThis === "object") {
        let item = ""
        let keys = Object.keys(data)
        let values = Object.values(data)
        for (let i = 0; i < keys.length; i++) {
            item += keys[i].toString() + ": " + values[i].toString()
            newArr.push(item)
        }
    } else if (whatsThis === "date") {
        let formatted = format(data, "ll")
        newArr.push(formatted)
    } else if (whatsThis === "boolean") {
        newArr.push(data)

    } else {
        newArr = undefined
    }
    if (Array.isArray(newArr)) {
        return newArr;
    } else {
        return undefined;
    }
    // array  

}

/**
 * @example
 * formatObject(data)
 * @date 2022-03-03
 * @param {any} data
 * @returns {object}
 */
export function formatObject(data) { // string 
    let newObj = {}
    let whatsThis = getType(data)
    if (whatsThis === "array") {
        for (let i = 0; i < data.length; i++) {
            newObj[i] = data[i]
        }
    } else {
        newObj = undefined;
    }
    if (typeof newObj === "object") {
        return newObj;
    } else {
        return undefined;
    }
}
/**
 * formatString(data)
 * @date 2022-03-03
 * @param {any} data
 * @returns {string}
 */

export function formatString(data) {
    // string 
    let string;
    let whatsThis = getType(data)
    if (whatsThis === "number") {
        string = data.toString()
    } else if (whatsThis === "array") {
        let stringed = ""
        for (let i = 0; i < data.length; i++) {
            if (typeof data[i] === "object") {
                stringed += JSON.stringify(data[i])
            } else {
                stringed += data[i]
            }
        }
        string = stringed;
    } else if (whatsThis === "object") {
        string = JSON.stringify(data)
    } else if (whatsThis === "date") {
        let getDate = format(data, "ll")
        string = getDate;
    } else if (whatsThis === "boolean") {
        string = data.toString()
    } else {
        string = undefined
    }
    if (typeof string === "string") {
        return string;
    } else {
        return undefined;
    }
}


/**
 * @example 
 * formatBoolean(data)
 * @author zen-out
 * @date 2022-03-03
 * @param {any} data
 * @returns {boolean}
 */
export function formatBoolean(data) {
    let bool;
    // string 
    let whatsThis = getType(data)
    if (whatsThis === "string") {
        let getType = data.toLowerCase()
        if (getType === "true") {
            bool = true;
        } else if (getType === "false") {
            bool = false;
        }
    } else {
        return undefined
    }
    if (typeof bool === "boolean") {
        return bool;
    } else {
        return undefined;
    }
}