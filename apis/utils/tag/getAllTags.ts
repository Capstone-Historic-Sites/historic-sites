import {connect} from "../interfaces/tag";
import {Tag} from "../interfaces/tag";


export async function getAllTags() {
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