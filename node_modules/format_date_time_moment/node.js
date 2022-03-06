const { getDaysAgo } = require("./module/create")
const { formatDateTime } = require("./module/node")
const { dateIsLonger } = require("./module/compare")
formatDateTime.getDaysAgo = getDaysAgo;
formatDateTime.dateIsLonger = dateIsLonger

module.exports = { formatDateTime, dateIsLonger }