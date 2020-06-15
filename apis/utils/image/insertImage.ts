import {connect} from "../../src/database"
import {Image} from "../interfaces/image";

export async function insertImage(image: Image) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'INSERT INTO historicSite(imageId, imageHistoricSiteId, imageDateAdded, imageName, imagePath) VALUES(UUID_TO_BIN(UUID(imageId)), UUID_TO_BIN(UUID()), :imageDateAdded, :imageName, :imagePath)'
        const [rows] = await mySqlConnection.execute(mySqlQuery, image)
        return "Images Uploaded Successfully"
    } catch (error) {
        console.log(error)
    }
}