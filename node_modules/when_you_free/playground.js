const when_you_free = require("./index.js")

function testWhenYouFree() {
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
    let isTrue3 = when_you_free.difference(dateHTML["one"], dateHTML["two"], "minutes")
    let isBeforeTrue = when_you_free.isBefore(dateHTML["one"], dateHTML["two"])
    let isTrue4 = when_you_free.isBetween(dateHTML["one"], dateHTML["two"], dateHTML["three"])
    let getDays2 = when_you_free.dateIsWithinLimit("March 1 2022", 14)
    let getDuration = when_you_free.getDuration("2022-03-14T02:20:15.986Z", "2022-03-14T02:07:15.986Z", "minutes")
    let getDuration2 = when_you_free.getDuration("2022-03-01T19:06:31.047Z", "2022-03-01T20:04:32.047Z", "seconds")
    let secondReadable = when_you_free.getReadableFormat("Dec 11, 2012", "from") // in two months
    let firstReadable = when_you_free.getReadableFormat("Dec 11, 2012", "to") // two month sago 
    let formatted1 = when_you_free.format(dateHTML["one"], "ll")
    let formatted2 = when_you_free.format(dateHTML["one"], "LL")
    let properDate = when_you_free.formatDateToPost(dateHTML["one"])
}

testWhenYouFree()