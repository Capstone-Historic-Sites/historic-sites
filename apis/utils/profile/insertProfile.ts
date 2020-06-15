import {Profile} from "../interfaces/profile";
import {connect} from "../../src/database";

export async function insertProfile(profile: Profile) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO profile(profileId, profileActivationToken, profileDateAdded, profileEmail, profileHash, profileIsAdmin, profileName, profileOrganization) VALUES(UUID_TO_BIN(UUID()), :profileId, :profileActivationToken, :profileDateAdded, :profileEmail, :profileHash, :profileIsAdmin, :profileName, :profileOrganization)";
        const [rows] = await mySqlConnection.execute(mySqlQuery, profile)
        return "Profile created succesfully"
    }   catch (error) {
        console.log(error)
    }
}