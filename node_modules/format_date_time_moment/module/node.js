const { getType } = require("./getType")
const moment = require("moment")
moment.locale("en")
    // moment.updateLocale('hk')
const ERROR_OBJECT = {
    error: "not valid date",
    error_location: "format_date_time_moment",
    message: "date error"
}

const month = [];
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

// console.log(paragraph.search(regex));
class FormatDateTime {
    /**
     *
     let formatDateTime = new FormatDateTime()
     * @author zen-out
         * @date 2022-01-13
     * @returns {class}
     */
    constructor() {
        this.startTime = "2022-01-12T19:06:31.047Z "
        this.endTime = "2022-01-12T20:06:31.047Z "
        this.startDate = "2022-01-12T19:06:31.047Z "
        this.endDate = "2022-01-12T20:06:31.047Z "
        this.html = "2018-12-31"
        this.seconds = 222

    }


    /**
* catchError(date)
* Sees if getDate is undefined or not an object. if so, return const ERROR_OBJECT = {
error: "not valid date",
error_location: "format_date_time_moment",
message: "date error"
}
* @date 2022-03-01
* @param {any} getDate
* @returns {any}
*/
    catchError(getDate) {
            if (getDate === undefined || typeof getDate !== "object") {
                return ERROR_OBJECT
            } else {
                return true;
            }
        }
        /**
         * @example
         * console.log(formatDateTime.isBetween("March 3, 2020", "March 10, 2021"))
         * @description 
         * Good to use if you want to see a date is before another
         * @author zen-out
         * @date 2022-01-20
         * @param {any} start
         * @param {any} end
         * @returns {boolean}
         */
    isBefore(start, end) {
            let dateOne = getType(start)
            let dateTwo = getType(end)
            let seeIfValid1 = this.catchError(dateOne)
            let seeIfValid2 = this.catchError(dateTwo)
            let isError = seeIfValid1 === true && seeIfValid2 === true
            if (isError === true) {
                let isTrue = dateOne.isBefore(dateTwo)
                return isTrue
            } else {
                return ERROR_OBJECT
            }
        }
        /**
         * @example
         * console.log(formatDateTime.getDuration("2022-03-01T19:06:31.047Z", "2022-03-01T20:04:32.047Z", "seconds")) // 3481
         console.log(formatDateTime.getDuration("2022-04-01T19:06:31.047Z", "2022-06-01T20:04:32.047Z", "days")) // 61.040289351851854
         * @author zen-out
         * @date 2022-01-13
         * @param {any} start
         * @param {any} end
         * @param {any} type
         * @returns {integer}
         */
    getDuration(start, end, type) {
        let dateOne = getType(start)
        let dateTwo = getType(end)
        let seeIfValid1 = this.catchError(dateOne)
        let seeIfValid2 = this.catchError(dateTwo)
        let isError = seeIfValid1 === true && seeIfValid2 === true
        if (isError === true) {

            let duration = moment.duration({
                from: dateOne,
                to: dateTwo
            });
            return duration.as(type)
        } else {
            return ERROR_OBJECT
        }
    }

    /**
     * @example
     * getReadableFormat("Dec 11, 2012", "from") in 2 months
     * getReadableFormat("Dec 11, 2012", "to") 2 months ago
     * @author zen-out
     * @date 2022-01-13
     * @param {any} getDate
     * @param {any} type
     * @returns {string}
     */
    getReadableFormat(getDate, type = "from") {
            let formatted = getType(getDate)
            let seeIfValid = this.catchError(formatted)
            if (!seeIfValid.error) {
                if (type === "from") {
                    return formatted.fromNow()
                } else {
                    return formatted.toNow()
                }
            } else {
                return ERROR_OBJECT
            }
        }
        /**
         * @example
         * console.log(formatDateTime.difference("00:22:00", "00:44:00", "seconds"))
         console.log(formatDateTime.difference("March 1, 2020", "March 1, 2021", "months"))
         * @author zen-out
         * @date 2022-01-13
         * @param {any} one
         * @param {any} two
         * @param {any} type
         * @returns {integer}
         */
    difference(one, two, type) {
            let dateOne = getType(one)
            let dateTwo = getType(two)
            let seeIfValid = this.catchError(dateOne)
            let seeIfValid2 = this.catchError(dateTwo)
            let bothTrue = seeIfValid && seeIfValid2

            if (bothTrue) {
                return Math.abs(dateOne.diff(dateTwo, type))
            } else {
                return ERROR_OBJECT
            }
        }
        /**
         * @example
         * TO SECONDS formatDateTime.format("00:00:10", "") // 10
         * TO CASUAL formatDateTime.format("", "")
         * TO BEFORE
         * console.log(formatDateTime.format("Dec 11, 2012", "HHMMSS"))
         * console.log(formatDateTime.format("March 1, 2022", "dateInput")) 2022 - 03 - 01 < input type = "date" / >
        //  console.log(formatDateTime.format("March 1, 2022", "timeInput")) 00:00:00 <input type="time" step="1" />
          //  console.log(formatDateTime.format("March 1, 2022", "LL"))  March 1, 2002
         console.log(formatDateTime.format("March 1, 2022", "localInput")) 2022 - 03 - 01 T00: 00: 00 < input type = "datetime-local"
         step = "1" / >
         * @author zen-out
         * @date 2022-01-13
         * @param {any} date
         * @param {any} type localInput, dateInput, timeInput, 
         * @returns {any}
         */
    format(date, type) {
        let formats = {
            localInput: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
            dateInput: 'YYYY-MM-DD', // <input type="date" />
            timeInput: 'HH:mm:ss', // <input type="time" step="1" />
            weekInput: 'GGGG-[W]WW', // <input type="week" />
            monthInput: 'YYYY-MM', // <input type="month" />, 
        };
        let getDate = getType(date)

        let seeIfValid = this.catchError(getDate)
            // console.log(seeIfValid, "valid")
        if (seeIfValid) {
            if (formats[type]) {
                return getDate.format(formats[type])
            } else {
                return getDate.format(type)
            }
        } else {
            return seeIfValid
        }

    }

    /**
     * @example
     * digitalToSeconds(00:33:22) -> seconds
     * @author zen-out
     * @date 2022-01-13
     * @param {any} string
     * @returns {integer}
     */
    digitalToSeconds(string) {
            let getType = this.format(string, "hh:mm:ss")
            console.log("🚀 ~ file: node.js ~ line 355 ~ FormatDateTime ~ digitalToSeconds ~ getType", getType)
            if (typeof getType === "string") {
                let spliced = getType.split(":")
                let hour = parseInt(spliced[0])
                let min = parseInt(spliced[1])
                let sec = parseInt(spliced[2])
                let totalHour = hour * 60 * 60
                let totalMin = min * 60
                let total = totalHour + totalMin + sec
                return total;
            } else {
                return ERROR_OBJECT
            }
        }
        /**
         * @example
         * formatDateToPost(stringInput)
         * @author zen-out
         * @date 2022-01-13
         * @param {any} stringInput
         * @returns {date}
         */
    formatDateToPost(stringInput) {
        let getDate = getType(stringInput)

        let seeIfValid = this.catchError(getDate)
        if (seeIfValid !== true) {
            return seeIfValid
        } else {


            let proper = getDate.toDate()
            return new Date(proper);
        }
    }


    /**
     * @example
     * secondsString(seconds)
     * @author zen-out
     * @date 2022-01-13
     * @param {any} seconds
     * @returns {string}
     */
    secondsString(seconds) {
            seconds = Number(seconds);
            var d = Math.floor(seconds / (3600 * 24));
            var h = Math.floor(seconds % (3600 * 24) / 3600);
            var m = Math.floor(seconds % 3600 / 60);
            var s = Math.floor(seconds % 60);

            var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
            return dDisplay + hDisplay + mDisplay + sDisplay;
        }
        /**
         * console.log(formatDates.isBetween("2020-05-01", "2019-01-01", "2021-01-01"))
         * @description 
         * Good to use if you want to see a date is before another
         * @author zen-out
         * @date 2022-01-20
         * @param {any} start
         * @param {any} end
         * @returns {boolean} or object 
         */
    isBetween(target, start, end) {
        let dateZero = getType(target)
        let dateOne = getType(start)
        let dateTwo = getType(end)
        let seeIfValid = this.catchError(dateOne)
        let seeIfValid2 = this.catchError(dateTwo)
        let seeIfValid3 = this.catchError(dateZero)
        let allTrue = seeIfValid && seeIfValid2 && seeIfValid3
        if (allTrue) {
            let isTrue = dateZero.isBetween(dateOne, dateTwo)
            return isTrue
        } else {
            return ERROR_OBJECT
        }
    }

    /**
     * @example 
     * 
     * getDate(date, options)
     * @author zen-out
     * @date 2022-01-13
     * @param {any} getDate
     * @param {any} option
     * @returns {any}
     */
    getDate(getDate, option) {
        //   console.debug("DATE", getDate);
        let date = new Date(getDate);
        let getMonth = month[date.getMonth()];
        let getDay = date.getDate();
        let getYear = date.getFullYear();
        let getHour = date.getHours();
        let getMinutes = date.getMinutes();
        let getSeconds = date.getSeconds();
        //   console.debug("month", getMonth, "day", getDay, getYear);
        //   );
        let firstOption = getMonth + " " + getDay;
        let secondOption =
            getDay + "/" + getMonth + "/" + getYear;
        let thirdOption =
            getMonth + " " + getDay + ", " + getYear;
        let fourthOption =
            getMonth + " " + getDay + ", " + getYear;
        if (getHour < 10) {
            getHour = "0" + getHour
        }
        if (getMinutes < 10) {
            getMinutes = "0" + getMinutes
        }
        if (getSeconds < 10) {
            getSeconds = "0" + getSeconds
        }
        let fifthOption =
            getHour + ":" + getMinutes + ":" + getSeconds;

        if (option === 1) {
            return firstOption;
        } else if (option === 2) {
            return secondOption;
        } else if (option === 3) {
            return thirdOption;
        } else if (option === 4) {
            return fourthOption;
        } else if (option === 5) {
            return fifthOption;
        } else if (option === 6) {
            return fifthOption + " " + fourthOption
        } else {
            return "no date";
        }

    }
}
let formatDateTime = new FormatDateTime()
    // formatDateTime.formatDateToPost("Dec 11, 1994")
    // formatDateTime.formatDateToPost("2222")

// formatDateTime.getType("March 1, 2022")

// formatDateTime.getType("2022/03/01")
// formatDateTime.getType("01-03-2022")

// formatDateTime.getType("2022-03-01")

// formatDateTime.getType("00:22:00")

// formatDateTime.getType("2022-03-01T19:06:31.047Z") *
//     formatDateTime.getType("March 1, 2022")
// formatDateTime.formatDateToPost("00:00:10")
// formatDateTime.formatDateToPost(new Date())

module.exports = { formatDateTime }