$(() => {
    console.log(formatDateTime.isBefore("March 3, 2020", "March 10, 2021"))
    console.log(formatDateTime.isBetween("2020-05-01", "2019-01-01", "2021-01-01"))

    console.log(formatDateTime.getType("2022-03-01T19:06:31.047Z"))
    console.log(formatDateTime.getType("00:22:00"))
    console.log(formatDateTime.getType("March 1, 2022"))
    console.log(formatDateTime.getType("Mar 1, 2022"))
    console.log(formatDateTime.getType("2022-03-01"))
    console.log(formatDateTime.getType("01-03-2022"))
    console.log(formatDateTime.getType("2022/03/01"))
    console.log(formatDateTime.getType(23))

    console.log(formatDateTime.getType(new Date()))
    console.log(formatDateTime.difference("00:22:00", "00:44:00", "seconds"))
    console.log(formatDateTime.difference("March 1, 2020", "March 1, 2021", "months"))
        // console.log(formatDateTime.add(23, Date.now()))
    console.log(formatDateTime.getDuration("2022-03-01T19:06:31.047Z", "2022-03-01T20:04:32.047Z", "seconds"))
    console.log(formatDateTime.formatDateToPost("March 1, 2022"))
    console.log(formatDateTime.formatDateToPost("2022-03-01"))
    console.log(formatDateTime.getType("222"))


})