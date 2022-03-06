const S = require("string")
const _ = require("lodash")
const chai = require("chai")
const assert = chai.assert
    /**********************************************
     * It's hard when you change the syntax... omg 
     * Don't change the syntax 
     * ==================================
     ***********************************************/

/**
 * @example
 * TRUNCATE("long test", 8, "...") // long tes...
 * @author zen-out
 * @date 2022-02-09
 * @param {any} string
 * @param {any} length
 * @param {any} ending
 * @returns {any}
 */
function TRUNCATE(string, length, ending) {
    return S(string).truncate(length, ending).s
}

/**
* @example
* WRAPHTML("lezzles11","div",{
  "id": "content",
  "class": "left bullet"
})
<div id="content" class="left bullet">lezzles11</div>
* @author zen-out
       * @date 2022-02-09
* @param {any} string
* @param {any} div
* @param {any} options
* @returns {any}
*/
function WRAPHTML(string, div, options) {
    return S(string).wrapHTML(div, options).s
}
module.exports = { TRUNCATE, WRAPHTML }