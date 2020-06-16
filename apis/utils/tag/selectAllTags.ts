import {Tag} from "../interfaces/tag";
import {connect} from "../../src/database";

export async function selectAllTags() {
    try {

        const mysqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(tagId) AS tagId, tagEndDate, tagName, tagStartDate, FROM tag";
        const [rows] = await mysqlConnection.execute(mySqlQuery)
        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}