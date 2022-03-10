const when_you_free = require("./dist/index.js")

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
    one: new Date(2008, 04, 04),
    two: "Dec 11, 2011",
    three: new Date(2020, 02, 05)
}
let formatted1 = when_you_free.format(dateTime["one"], "ll")
console.log("🚀 ~ file: playground.js ~ line 26 ~ formatted1", formatted1)

let formatted2 = when_you_free.format(dateTime["one"], "LL")
console.log("🚀 ~ file: playground.js ~ line 29 ~ formatted2", formatted2)
let digitalOne = when_you_free.digitalToSeconds(dateTime["one"])
console.log("🚀 ~ file: playground.js ~ line 27 ~ digitalOne", digitalOne)

let isTrue = when_you_free.isBetween(dateString["one"], dateString["two"], dateString["three"])
console.log("🚀 ~ file: playground.js ~ line 27 ~ isTrue", isTrue)
let isTrue3 = when_you_free.isBetween(dateHTML["one"], dateHTML["two"], dateHTML["three"])
console.log("🚀 ~ file: playground.js ~ line 29 ~ isTrue3", isTrue3)

let isTrue4 = when_you_free.isBetween(dateObject["one"], dateObject["two"], dateObject["three"])

console.log("🚀 ~ file: playground.js ~ line 31 ~ isTrue4", isTrue4)

let isFalse = when_you_free.isBetween(dateString["two"], dateString["one"], dateString["three"])
console.log("🚀 ~ file: playground.js ~ line 36 ~ isFalse", isFalse)

let isFalse3 = when_you_free.isBetween(dateHTML["two"], dateHTML["one"], dateHTML["three"])

console.log("🚀 ~ file: playground.js ~ line 26 ~ isFalse3", isFalse3)
let isFalse4 = when_you_free.isBetween(dateObject["two"], dateObject["one"], dateObject["three"])

console.log("🚀 ~ file: playground.js ~ line 40 ~ isFalse4", isFalse4)

let getType2 = when_you_free.getReadableFormat(dateHTML["two"], "to")

console.log("🚀 ~ file: playground.js ~ line 45 ~ getType2", getType2)


let getType3 = when_you_free.formatDateToPost(dateHTML["two"])

let getType4 = when_you_free.formatDateToPost(getType3)
console.log("🚀 ~ file: playground.js ~ line 50 ~ getType3", getType4)