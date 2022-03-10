const moment = require("moment")
const { T, F, ISTYPEOF } = require("node_basetest")
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

describe("it formats the dates accurately", () => {
    it("can format into readable formats", () => {
        let getType = when_you_free.getReadableFormat(dateHTML["one"], "from")
        console.log("🚀 ~ file: format.js ~ line 30 ~ it ~ getType", getType)
        ISTYPEOF(getType, "string")
        let getType2 = when_you_free.getReadableFormat(dateHTML["two"], "to")
        ISTYPEOF(getType2, "string")
        console.log("🚀 ~ file: format.js ~ line 31 ~ it ~ getType2", getType2)

    })
    it("can format date inputs for html", () => {

    })
    it("can format to different types", () => {

    })
})