import {HistoricSite} from "../interfaces/historic-site"
import {connect} from "../../src/database"
import {Image} from "../interfaces/image";

export async function insertImage(image: Image) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'DELETE FROM image WHERE imageId UUID_TO_BIN(UUID(imageId))'
        const [rows] = await mySqlConnection.execute(mySqlQuery, Image)
        return "Images Deleted Successfully"
    } catch (error) {
        console.log(error)
    }
}