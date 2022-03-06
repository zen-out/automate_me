const S = require("string")
const _ = require("lodash")
const chai = require("chai")
const assert = chai.assert
    /**
     * @example
     * it('', () => {
            F(DOESNOTHAVEHELPER("{{>", ">")) // false (matches the full instance)
            T(DOESNOTHAVEHELPER("{{>", "asdf")) // true (matches the full instance)
        });
     * @author zen-out
             * @date 2022-02-10
     * @param {any} string
     * @param {any} item
     * @returns {any}
     */
function DOESNOTHAVEHELPER(string, item) {
    let getItems = S(string).count(item)
    let getBoolean = getItems === 0
    return getBoolean;
}

/**
 * @example
 * it(' ', () => {
        DOESNOTHAVE("{{>", ">") // passes (matches the full instance)
        DOESNOTHAVE("{{>", "asdf") // passes
    });
 * @author zen-out
         * @date 2022-02-10
 * @param {any} string
 * @param {any} item
 * @returns {any}
 */
function DOESNOTHAVE(string, item) {
    let getBoolean = DOESNOTHAVEHELPER(string, item)
    if (getBoolean) {
        assert.isTrue(getBoolean)
    } else {
        assert.isFalse(getBoolean)
    }
}

module.exports = { DOESNOTHAVEHELPER, DOESNOTHAVE }