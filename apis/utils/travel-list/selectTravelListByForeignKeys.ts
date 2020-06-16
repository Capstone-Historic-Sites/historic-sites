import {TravelList} from "../interfaces/travel-list";
import {connect} from "../../src/database";

export async function selectTravelListByForeignKeys(travelListProfileId : string, travelListHistoricSiteId: string) {
    try {
        const mysqlConnection = await connect();

        const mySqlQuery = 'SELECT BIN_TO_UUID(travelListProfileId) as travelListProfileId, BIN_TO_UUID(travelListHistoricSiteId) as travelListHistoricSiteId, travelListDateAdded, travelListRank FROM travelList WHERE travelListProfileId = UUID_TO_BIN(:travelListProfileId) AND travelListHistoricSiteId = UUID_TO_BIN(:travelListHistoricSiteId)'

        const [rows] =  await mysqlConnection.execute(mySqlQuery, {travelListProfileId, travelListHistoricSiteId})

        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}