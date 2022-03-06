const { formatDateTime } = require("format_date_time_moment/node")

let date = formatDateTime.format(new Date(), "ll")
let removeSpaces = date.replaceAll(" ", "")
let getDate = removeSpaces.replaceAll(",", "-")
module.exports = { getDate }