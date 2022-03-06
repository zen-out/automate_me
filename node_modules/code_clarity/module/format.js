const winston = require("winston")
const colors = require('colors/safe');
const { formatDateTime } = require("format_date_time_moment/node")

const myFormat = winston.format.printf(({ level, message, timestamp, ...metadata }) => {
    let readableTime;
    let white = colors.white.bold
    let red = colors.red.bold;
    let green = colors.green.bold;
    let pink = colors.magenta;
    let teal = colors.cyan.bold;
    let blue = colors.brightBlue.bold;
    let yellow = colors.yellow;
    let rainbow = colors.rainbow
    let gray = colors.bold.gray
    let bgBlack = colors.cyan.bgBlack
    let impMessage = colors.white
    if (timestamp) {
        readableTime = formatDateTime.format(timestamp, "LTS")
        timestamp = gray(timestamp);
        readableTime = gray(readableTime)
    }
    if (level) {
        if (level === "problem" || level === "is") {
            level = colors.red(level)
            message = red(message)
        } else if (level === "should" || level === "how") {
            level = colors.white(level)
            message = white(message)
        } else if (level === "step") {
            level = yellow(level)
            message = yellow(message)
        } else if (level === "motherlode") {
            level = colors.green(level)
            message = green(message)
        } else if (level === "start" || level === "end") {
            level = pink(level)
            message = pink(message)
        } else {
            level = colors.grey(level)
            message = colors.green(message)
        }
    }


    let msg = `${readableTime} [${level}] : ${message}`
    if (metadata) {
        msg += JSON.stringify(metadata)
    }
    return msg
});

module.exports = { myFormat }