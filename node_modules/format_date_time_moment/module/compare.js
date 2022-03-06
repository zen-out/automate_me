const { formatDateTime } = require("./node")
const { getDaysAgo } = require("./create")

function dateIsLonger(date, limit) {
    let cantBePastThisDate = getDaysAgo(limit)
    let isPast = formatDateTime.isBefore(date, cantBePastThisDate)
    return isPast;
}
module.exports = { dateIsLonger };