import { format } from "make_legit"
/**
 * @example
 * const {upset} = require("whats_wrong")
 * upset("an error", "location")
 * @author zen-out
 * @date 2022-03-06
 * @param {any} error
 * @param {any}  location = undefined
 * @returns {any}
 */
export function upset(error, location = "", expected = "") {
    let getError = format(error, "string")

    let finalError = {
        error: getError,
        location: location,
        expected: expected
    }
    let formattedError = format(finalError, "string")
    console.log("\n*** check ***\n" + formattedError + "\n*** end ***\n")
    return finalError
}