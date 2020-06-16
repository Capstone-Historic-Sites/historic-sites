import {connect} from "../../src/database"
import {TravelList} from "../interfaces/travel-list";

export async function updateTravelList(travelList : TravelList) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'UPDATE travelList SET travelListRank = :travelListRank WHERE travelListProfileId = UUID_TO_BIN(:travelListProfileId) AND travelListHistoricSiteId = UUID_TO_BIN(:travelListHistoricSiteId)'
        const [rows] = await mySqlConnection.execute(mySqlQuery, travelList)
        return "Travel-List Updated Successfully"
    } catch (error) {
        console.log(error)
    }
}