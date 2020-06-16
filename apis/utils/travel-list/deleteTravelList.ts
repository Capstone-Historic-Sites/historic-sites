import {connect} from "../../src/database"
import {TravelList} from "../interfaces/travel-list";

export async function deleteTravelList(travelListProfileId: string, travelListHistoricSiteId: string) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'DELETE FROM travelList WHERE travelListProfileId = UUID_TO_BIN(:travelListProfileId) AND travelListHistoricSiteId = UUID_TO_BIN(:travelListHistoricSiteId)'
        const [rows] = await mySqlConnection.execute(mySqlQuery, {travelListProfileId, travelListHistoricSiteId})
        return "Travel List Deleted Successfully"
    } catch (error) {
        console.log(error)
    }
}