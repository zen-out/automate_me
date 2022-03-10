const moment = require("moment")
const { T, F } = require("node_basetest")
const when_you_free = require("../dist/index.js")
let dateString = {
    one: "Dec 11, 2012",
    two: "Dec 12, 2013",
    three: "Dec 13, 2014"
}
let dateTime = {
    one: "11:22",
    two: "22:11",
    three: "23:22"
}
let dateHTML = {
    one: "2020-03-01",
    two: "2021-03-01",
    two: "2022-03-01"
}

let dateObject = {
    one: new Date(2010, 1, 1),
    two: new Date(2011, 1, 1),
    three: new Date(2020, 1, 1)
}
describe("compare functions", () => {
    it("can pass isBefore", () => {

        let isTrue = when_you_free.isBefore(dateString["one"], dateString["two"])
        T(isTrue)
        console.log("🚀 ~ file: playground.js ~ line 22 ~ isTrue", isTrue)
        let isTrue2 = when_you_free.isBefore(dateTime["one"], dateTime["two"])
        T(isTrue2)
        console.log("🚀 ~ file: playground.js ~ line 24 ~ isTrue2", isTrue2)
        let isTrue3 = when_you_free.isBefore(dateHTML["one"], dateHTML["two"])
        T(isTrue3)
        console.log("🚀 ~ file: playground.js ~ line 26 ~ isTrue3", isTrue3)
        let isTrue4 = when_you_free.isBefore(dateObject["one"], dateObject["two"])
        T(isTrue4)
        console.log("🚀 ~ file: playground.js ~ line 27 ~ isTrue4", isTrue4)
        let isFalse = when_you_free.isBefore(dateString["two"], dateString["one"])
        F(isFalse)
        console.log("🚀 ~ file: playground.js ~ line 22 ~ isFalse", isFalse)
        let isFalse2 = when_you_free.isBefore(dateTime["two"], dateTime["one"])

        F(isFalse2)
        console.log("🚀 ~ file: playground.js ~ line 24 ~ isFalse2", isFalse2)
        let isFalse3 = when_you_free.isBefore(dateHTML["two"], dateHTML["one"])

        F(isFalse3)
        console.log("🚀 ~ file: playground.js ~ line 26 ~ isFalse3", isFalse3)
        let isFalse4 = when_you_free.isBefore(dateObject["two"], dateObject["one"])

        F(isFalse4)
        console.log("🚀 ~ file: playground.js ~ line 27 ~ isFalse4", isFalse4)
    })
    it("can get difference between two dates", () => {

        let isTrue = when_you_free.difference(dateString["one"], dateString["two"], "days")
        isTrue = moment(isTrue).isValid()
        T(isTrue)
        console.log("🚀 ~ file: playground.js ~ line 22 ~ isTrue", isTrue)
        let isTrue2 = when_you_free.difference(dateTime["one"], dateTime["two"], "seconds")
        isTrue2 = moment(isTrue2).isValid()
        T(isTrue2)
        console.log("🚀 ~ file: playground.js ~ line 24 ~ isTrue2", isTrue2)
        let isTrue3 = when_you_free.difference(dateHTML["one"], dateHTML["two"], "minutes")

        isTrue3 = moment(isTrue3).isValid()
        T(isTrue3)
        console.log("🚀 ~ file: playground.js ~ line 26 ~ isTrue3", isTrue3)
        let isTrue4 = when_you_free.difference(dateObject["one"], dateObject["two"], "months")

        isTrue4 = moment(isTrue4).isValid()
        T(isTrue4)

        // isTrue4 = moment(isTrue4).isValid()
    })
    it("can accurately say if the date is inbetween the other two", () => {
        let isTrue = when_you_free.isBetween(dateString["one"], dateString["two"], dateString["three"])
        console.log("🚀 ~ file: compare.js ~ line 81 ~ it ~ isTrue", isTrue)
        F(isTrue)
        let isTrue3 = when_you_free.isBetween(dateHTML["one"], dateHTML["two"], dateHTML["three"])
        F(isTrue3)
            // console.log("🚀 ~ file: playground.js ~ line 26 ~ isTrue3", isTrue3)
        let isTrue4 = when_you_free.isBetween(dateObject["one"], dateObject["two"], dateObject["three"])
        F(isTrue4)
        console.log("🚀 ~ file: playground.js ~ line 27 ~ isTrue4", isTrue4)
        let isFalse = when_you_free.isBetween(dateString["two"], dateString["one"], dateString["three"])
        T(isFalse)
        let isFalse3 = when_you_free.isBetween(dateHTML["two"], dateHTML["one"], dateHTML["three"])

        T(isFalse3)
        console.log("🚀 ~ file: playground.js ~ line 26 ~ isFalse3", isFalse3)
        let isFalse4 = when_you_free.isBetween(dateObject["two"], dateObject["one"], dateObject["three"])

        T(isFalse4)
    })
})