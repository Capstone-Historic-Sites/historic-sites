import {Profile} from "../interfaces/profile";
import {connect} from "../../src/database";

export async function updateProfile(profile: Profile) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "UPDATE profile SET profileEmail = :profileEmail, profileName = :profileName  WHERE profileId = UUID_TO_BIN(:profileId)"

        const [rows] = await mySqlConnection.execute(mySqlQuery, profile)
        return "Updated profile successfully"
    }   catch (error) {
        console.log(error)
    }

}