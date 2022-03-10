const formatDateTime = require("../dist/index.js")
const t = require("node_basetest")

function testDate(date, expected) {
    let toStringDate = formatDateTime.format(date, "ll")
    console.log("DATE", toStringDate)
    t.HAS(toStringDate, expected)
}
describe("it should accurately return dates", () => {
    it("should accept all sorts of dates", () => {
        let acceptsDigital = formatDateTime.getType("00:22:00")
        let formatted = formatDateTime.format(acceptsDigital, "HHMMSS")
        t.HAS(formatted, "00")
    })
    it("should accept month names", () => {
        let acceptsMonthNames = formatDateTime.getType("Dec 11, 1994")
        console.log("🚀 ~ file: test.js ~ line 10 ~ it ~ acceptsMonthNames", acceptsMonthNames)
        let formatted = formatDateTime.formatDateToPost(acceptsMonthNames)
        let toStringDate = formatDateTime.format(formatted, "LL")
        t.HAS(toStringDate, "December 11")
    })
    it("should throw error if not valid date", () => {
        let invalidDate2 = "1222222"
        let formatted = formatDateTime.formatDateToPost(invalidDate2)
        console.log("FORMATTED", formatted)
        t.HAS(formatted, "NOT VALID")
    })

    it("should get duration, based on two dates", () => {
        let duration = formatDateTime.getDuration("2022-03-01T19:06:31.047Z", "2022-03-01T20:04:32.047Z", "seconds")
        let isNumber = typeof duration === "number"
        t.T(isNumber)

    })

    it("should format date to post", () => {
        let formatted = formatDateTime.formatDateToPost("2022-02-02")
        testDate(formatted, "Feb 2, 2022")

        let formatted2 = formatDateTime.formatDateToPost("2022-10-02")
        testDate(formatted2, "Oct 2")
    })

    it("should get readable format", () => {
        let first = formatDateTime.getReadableFormat("Dec 11, 2020", "from")
        let second = formatDateTime.getReadableFormat("Dec 11, 2022", "to")
        t.HAS(first, "in")
        t.HAS(second, "ago")
    })

    it("should format digital to seconds", () => {
        let seconds = formatDateTime.difference("00:22:00", "00:44:00", "seconds")
        t.T(typeof seconds === "number")
    })
    it("should accept weird dates", () => {
        let formats = {
            start: "2012-12-12",
            end: "12-12-2012"
        }
        let otherFormats = {
            start: "2012/12/12",
            end: "2013/12/12"
        }
        let wording = {
            start: "March 20, 2020",
            end: "ar 21, 2021"
        }
        let getFormat = formatDateTime.format(formats.start, "ll")
        console.log("🚀 ~ file: test.js ~ line 69 ~ it ~ getFormat", getFormat)
        console.log("🚀 ~ file: test.js ~ line 69 ~ it ~ getFormat", getFormat)
        t.T(typeof getFormat === "string")

        let getFormat2 = formatDateTime.format(formats.end, "ll")
        console.log("🚀 ~ file: test.js ~ line 72 ~ it ~ getFormat2", getFormat2)
        t.T(typeof getFormat2 === "string")

        let getFormat3 = formatDateTime.format(otherFormats.start, "ll")
        console.log("🚀 ~ file: test.js ~ line 75 ~ it ~ getFormat3", getFormat3)
        let typeIsString3 = typeof getFormat3 === "string"
        t.T(typeIsString3)

        let getFormat5 = formatDateTime.format(wording.start, "ll")
        console.log("🚀 ~ file: test.js ~ line 83 ~ it ~ getFormat5", getFormat5)
        let typeIsString4 = typeof getFormat5 === "string"
        t.T(typeIsString4)
        t.DOESNOTHAVE(getFormat5, "NOT VALID")

    })
})