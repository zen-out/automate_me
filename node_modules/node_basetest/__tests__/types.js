const { T, F, HASHELPER, HAS, COUNTHELPER, COUNT, ATLEASTHELPER, ATLEAST, DOESNOTHAVEHELPER, DOESNOTHAVE, ISTYPEOF, ENDSWITHHELPER, ENDSWITH, STARTSWITHHELPER, STARTSWITH, TRUNCATE, WRAPHTML, ISLESSHELPER, ISLESS } = require("../module")
const inputArray = [1, 2, 33, 4, 5]
const inputObject = { id: 33, name: "cyrus", date: new Date(), public: true }
const inputString = "33"
const inputNumber = 234234233.32
describe("can do all types, ", () => {
    it("can handle arrays for counts", () => {
        COUNT(inputArray, 1, 1) // should be true 
        F(COUNTHELPER(inputArray, 1, 2)) // should not pass 
    })

    it('has works for array, object, string, number and date', () => {
        T(HASHELPER(inputArray, 3)) // true 
        F(HASHELPER(inputArray, 10)) // false
        F(HASHELPER(inputObject, "lesley")) // false
        T(HASHELPER(inputObject, "cyrus")) // 
        T(HASHELPER(inputNumber, 33)) // true 
        F(HASHELPER(inputNumber, 10)) // false
        T(HASHELPER(inputObject, "33")) // trye
        F(HASHELPER(inputObject, "44")) // false
        HAS(inputArray, 3) // true 
        HAS(inputArray, 10) // false
        HAS(inputObject, "lesley") // false
        HAS(inputObject, "cyrus") // 
    });
})