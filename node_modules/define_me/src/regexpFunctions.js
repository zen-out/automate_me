/**
 * @example
 * 
let getThis = define_me.containsThis(".git", define_me.git)
console.log("🚀 ~ file: playground.js ~ line 4 ~ getThis", getThis)
 * @author zen-out
 * @date 2022-03-06
 * @param {any} string
 * @param {any}  regexp
 * @returns {any}
 */

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function startsWithString(string) {
    let regexp = new RegExp(/^[A-Z]/)
    let regexp2 = new RegExp(/^[a-z]/)
    let firstCondition = regexp.test(string)
    let secondCondition = regexp2.test(string)
    let startsWithLetter = firstCondition && secondCondition
    return startsWithLetter
}

// #TODO: make sure the string function only accepts Jan, Feb....


/**
 * @example
 * let getThis = define_me.containsThis(".git", define_me.git);
let checkDate = define_me.containsThis("March 20 2012", define_me.stringDate)
let output3 = define_me.containsThis("22:44", define_me.hhmm)
let output10 = define_me.containsThis("01/12/2022", define_me.dashDDMMYYYY)
let output11 = define_me.containsThis("2022/02/02", define_me.dashYYYYMMDD)
let output6 = define_me.containsThis("14-1-2022", define_me.hyphenDDMMYYYY)
let output7 = define_me.containsThis("13-01-2018", define_me.hyphenDDMMYYYY)
let output5 = define_me.containsThis("2019-2-10", define_me.hyphenYYYYMMDD)
let output4 = define_me.containsThis("2020-02-22", define_me.hyphenYYYYMMDD)
let output12 = define_me.containsThis("Mar 2 2019", define_me.stringDate)
let output14 = define_me.containsThis("Mar 2 2022", define_me.stringDate)
let trueThis = define_me.containsThis("digital", define_mehhmmss)
 * @author zen-out
 * @date 2022-03-07
 * @param {any} string
 * @param {any}  regexp
 * @returns {any}
 */
function containsThis(string, regexp) {
    if (startsWithString(string)) {
        string = capitalizeFirstLetter(string)
    }
    let check = new RegExp(regexp)
    return check.test(string)
}


function matchWords(subject, words) {
    var regexMetachars = /[(){[*+?.\\^$|]/g;

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].replace(regexMetachars, "\\$&");
    }

    var regex = new RegExp("\\b(?:" + words.join("|") + ")\\b", "gi");

    return subject.match(regex) || [];
}
export { containsThis, matchWords }