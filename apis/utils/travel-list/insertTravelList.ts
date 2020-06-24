import {connect} from "../../src/database"
import {TravelList} from "../interfaces/travel-list";

export async function insertTravelList(travelList: TravelList) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'INSERT INTO travelList(travelListProfileId, travelListHistoricSiteId, travelListDateAdded, travelListRank) VALUES(UUID_TO_BIN(:travelListProfileId), UUID_TO_BIN(:travelListHistoricSiteId), NOW(), :travelListRank)'
        const [rows] = await mySqlConnection.execute(mySqlQuery, travelList)
        return "Historic site added to travel list"
    } catch (error) {
        console.log(error)
    }
}