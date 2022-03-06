const { formatDateTime } = require("./node")
let test = formatDateTime.format("Dec 11, 1994", "ll")
console.log("hello")
console.log("🚀 ~ file: node.js ~ line 4 ~ test", test)

let before = formatDateTime.getDaysAgo(2)

console.log("🚀 ~ file: playground.js ~ line 6 ~ before", before)


let shouldWeDelete = formatDateTime.dateIsLonger("March 2, 2022", 5)

let shouldDelete = formatDateTime.dateIsLonger("March 2, 2022", 1)
console.log("🚀 ~ file: fs.js ~ line 82 ~ shouldDelete", shouldDelete)
console.log("🚀 ~ file: fs.js ~ line 80 ~ shouldWeDelete", shouldWeDelete)