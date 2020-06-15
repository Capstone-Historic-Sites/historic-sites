import {connect} from "../../src/database"
import {TravelList} from "../interfaces/travel-list";

export async function insertTravelList(travelList: TravelList) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'INSERT INTO TravelList(travelListProfileId, travelListHistoricSiteId, travelListRank, travelListDateAdded) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(UUID()), :travelListRank, :travelListDateAdded)'
        const [rows] = await mySqlConnection.execute(mySqlQuery, travelList)
        return "Travel List Uploaded Successfully"
    } catch (error) {
        console.log(error)
    }
}