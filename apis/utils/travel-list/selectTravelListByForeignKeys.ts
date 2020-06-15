import {TravelList} from "../interfaces/travel-list";
import {connect} from "../../src/database";

export async function selectTravelListByForeignKeys(selectTravelListByForeignKeys : string | null) {
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT BIN_TO_UUID(selectTravelListByForeignKeys) as selectTravelListByForeignKeys FROM TravelList WHERE selectTravelListByForeignKeys = UUID_TO_BIN(:selectTravelListByForeignKeys)'

        const [rows] =  await mysqlConnection.execute(mySqlQuery, selectTravelListByForeignKeys)

        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}