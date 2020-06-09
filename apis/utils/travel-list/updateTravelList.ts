import {HistoricSite} from "../interfaces/historic-site"
import {connect} from "../../src/database"
import {TravelList} from "../interfaces/travel-list";

export async function insertTravelList(travelList: TravelList) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'DELETE FROM travellist WHERE travelListProfileId UUID_TO_BIN(UUID(travelListProfileId))'
        const [rows] = await mySqlConnection.execute(mySqlQuery, travelList)
        return "Travel List Deleted Successfully"
    } catch (error) {
        console.log(error)
    }
}