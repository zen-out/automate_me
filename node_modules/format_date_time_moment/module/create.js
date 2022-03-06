const moment = require("moment")
const { getType } = require("./getType")
moment.locale("en")


/**
 * @Description 
 * let march2 = getDaysAgo(2) // March 2, 2022
 * console.log("🚀 ~ file: create.js ~ line 36 ~ march2", march2)
 * @author zen-out
 * @date 2022-03-04
 * @returns {any}
 */
function getDaysAgo(numDaysAgo) {
    let today = new Date()
    let type = getType(today)
    let daysAgo = type.subtract(numDaysAgo, "days")
    return daysAgo;
}
module.exports = { getDaysAgo }
    // var a = moment.duration(3, 'd');
    // var b = moment.duration(2, 'd');
    // a.subtract(b).days(); // 1
    // var x = new moment()
    // var y = new moment()
    // var duration = moment.duration(x.diff(y))
    // returns duration object with the duration between x and y