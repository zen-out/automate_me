const winston = require("winston")
const { myFormat } = require("./format")
const { getDate } = require("./getDate")

const hourglass = winston.createLogger({
    format: winston.format.combine(winston.format.splat(),
        winston.format.timestamp(),
        myFormat),
    levels: {
        start: 0,
        end: 1,
    },
    transports: [
        new winston.transports.Console({ level: "end" }),
        new winston.transports.File({
            level: 'end',
            filename: `focus/${getDate}/timer.log`,
            format: winston.format.json()
        })
    ],

})

const see = winston.createLogger({
    levels: {
        done: 0,
        motherlode: 1,
        problem: 2,
        is: 3,
        step: 4,
        how: 5,
        should: 6,
        story: 7,
    },
    format: winston.format.combine(winston.format.splat(),
        winston.format.timestamp(),
        myFormat),
    transports: [
        new winston.transports.Console({ level: "story" }),
        new winston.transports.File({
            filename: `focus/${getDate}/focus.log`,
            format: winston.format.json(),

        }),
        new winston.transports.File({
            level: 'motherlode',
            filename: `focus/${getDate}/done.log`,
            format: winston.format.json()
        }),
    ],
    handleExceptions: [
        new winston.transports.File({
            filename: `focus/${getDate}/errors.log`,
            format: winston.format.json()
        }),
    ],
    handleRejections: [
        new winston.transports.File({
            filename: `focus/${getDate}/errors.log`,
            format: winston.format.json()
        }),

    ],
    level: 'how',
})

module.exports = { see, hourglass }

// see.problem("problem")
// see.should("what should be happening")
// see.is("what actually is happening")
// see.story("hi")
// see.is("hi")
// see.how("how can we get there?")
// see.step("step, try")
// see.motherlode("motherlode, solved it by...")
// hourglass.start("hi")
// hourglass.end("end")