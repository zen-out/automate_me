class EffectiveKnex {
    /**
     * let effectiveKnex = new effectiveKnex()
     * @date 2022-03-02
     * @returns {any}
     */
    constructor() {

        }
        /**
         * @example 
         * let getOne = getOne(knex, table, id)
         * @Description 
         * 1. returns one instance of item, given id
         * @author zen-out
         * @date 2022-03-03
         * @param {any} table
         * @returns {any}
         */
    async getOne(knex, table, id) {
        let object = await knex(table).select("*").where({ id: id })
        return getObject(object);
    }

    /**
     * @example 
     * let all = getAll(knex, "hourglass")
     * @Description 
     * getAll(knex, table)
     * @author zen-out
     * @date 2022-03-03
     * @param {any} knex, table
     * @returns {array}
     */
    async getAll(knex, table) {
            let all = await knex(table).select("*")
            return all
        }
        /**
         * @Description 
         * del(knex, table, id)
         * @author zen-out
         * @date 2022-03-03
         * @param {any} table
         * @returns {integer}
         */
    async del(knex, table, id) {
            let deleted = await knex(table).where({ id: id }).del()

            return deleted;
        }
        /**
         * cleanPostObject(knex, table, object, callbacks)
         * @Description 
         *          * 1. Trims object
         * 2. If it has id, will delete it 
         * 3. Gets table (only matches with values that has table)
         * 4. Gets keys from that table
         * 5. Loops through array 
         * 6. If there is a callback passed in and the key matches the column, then it will assign that to the new object
         * 7. If the column type doesn't match the column value 
         * @author zen-out
         * @date 2022-03-03
         * @param {any} checkObj["id"]
         * @returns {any}
         */
    async cleanPostObject(knex, table, checkObj, callbacks = {}) {
            if (checkObj["id"]) {
                delete checkObj["id"]
            }
            let getCleaned = await getCleanObject(knex, table, checkObj, callbacks)
            return getCleaned;
        }
        /**
         * cleanUpdateObject(knex, table, id, obj, callbacks)
         * @Description 
         *       * 1. Trims object
         * 2. If it has id, will delete it
         * 3. Gets table (only matches with values that has table)
         * 4. Gets keys from that table
         * 5. Loops through array
         * 6. If there is a callback passed in and the key matches the column, then it will assign that to the new object
         * 7. If the column type doesn't match the column value
         * @author zen-out
         * @date 2022-03-03
         * @param {any} knex
         * @param {any} table
         * @param {any} checkObj
         * @param {any} callbacks
         * @returns {any}
         */
    async cleanUpdateObject(knex, table, id, checkObj, callbacks = {}) {
        let update = await getCleanObject(knex, table, checkObj, callbacks);
        update = getObject(update)
        let original = await knex(table).select("*").where({ id: id })
        original = getObject(original)
        let merged = _.extend(original, update);

        return merged;
    }

    /**
     * getInfo(knex, table, type="object")
     * @description 
     * 1. Has a dictionary - 
     * 2. Gets knex(table).columnInfo()
     * 3. if property isn't created 
     * 4. Push it into array called tableColumns
     * 5. If third parameter is object, will return key and value pairs of column: type. Else, if third parameter is array, will return an array of the key values 
     * @example
     * this.getTableInfo(knex, "hourglass", "object")
     * // returns {emails: string... }
     * @author zen-out
     * @date 2022-02-16
     * @param {any} knex
     * @param {any} table
     * @param {any} type="object"
     * @returns {any}
     */
    async getInfo(knex, table, type = "object") {
            let dictionary = {
                timestamp: "object",
                boolean: "boolean",
                character: "string",
                integer: "number"
            }
            let tableInfo = {}
            let tableColumns = []
            let columns = await knex(table).columnInfo()
            for (const property in columns) {
                if (property !== "created") {
                    tableColumns.push(property)
                    let name = property
                    let first = columns[property]["type"].split(" ")
                    tableInfo[name] = dictionary[first[0]]
                }
            }
            if (type === "object") {
                return tableInfo;
            } else if (type === "array") {
                return tableColumns;
            } else {
                console.log("what other types are there")
            }
        }
        /**
         * @Description 
         * Checks if object or array. If array, returns first item, else, will return object 
         * @author zen-out
         * @date 2022-03-03
         * @param {any} Array.isArray(objectOrArray
         * @returns {any}
         */
    getObject(objectOrArray) {
        if (Array.isArray(objectOrArray)) {
            if (objectOrArray.length >= 1) {
                let getFirst = objectOrArray[0]
                if (typeof getFirst === "object") {
                    return getFirst;
                }
            } else {
                return {}
            }
        } else {
            if (typeof objectOrArray === "object") {
                return objectOrArray
            }
        }
    }
    async getTableBody(knex, table) {
        let getTableInfo = await getInfo(knex, table, "object")
        let keys = Object.keys(getTableInfo)
        let sampleObj = {}
        for (let i = 0; i < keys.length; i++) {
            // grab the value 
            let value = keys[i]
            let shouldBeType = getTableInfo[keys[i]];
            if (shouldBeType === "object") {
                sampleObj[keys[i]] = "date";
            } else {
                sampleObj[keys[i]] = shouldBeType
            }

        }
        return sampleObj
    }

    /**
     * @Description 
     * makeData(knex, table, number)
     * Will create fake data 
     * @author zen-out
     * @date 2022-03-03
     * @param {any} knex
     * @param {any} table
     * @returns {any}
     */
    async makeData(knex, table, number) {
        let getShape = await getTableBody(knex, table)
        let getFakes = makeFakes.createMany(getShape, number, false)
        return getFakes
    }

    /**
     * @Description 
     * Will insert data, given knex, table, and unmber of items to insert
     * @author zen-out
     * @date 2022-03-03
     * @param {any} knex
     * @param {any} table
     * @returns {any}
     */
    async postFakeData(knex, table, number) {
        let arr = []
        let getTake = await makeData(knex, table, number)
        for (let i = 0; i < getTake.length; i++) {
            let getArr = await knex(table).returning("*").insert(getTake[i])
            arr.push(getArr)
        }
        return arr;
    }

}