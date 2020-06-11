import {Profile} from "../interfaces/profile";
import {connect} from "../../src/database";

export async function deleteProfile(profile: Profile) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "DELETE FROM profile WHERE profileId = UUID_TO_BIN(:profileId)"

        const [rows] = await mySqlConnection.execute(mySqlQuery, {profile})
        return "Deleted profile successfully"
    }   catch (error) {
        console.log(error)
    }
}