import {Profile} from '../interfaces/profile'
import {connect} from '../../src/database'

export async function updateProfile(profile: Profile) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'UPDATE profile SET profileActivationToken = :profileActivationToken, profileEmail = :profileEmail, profileHash = :profileHash, profileName = :profileName, profileOrganization = :profileOrganization WHERE profileId = UUID_TO_BIN(:profileId)'
        const [rows] = await mySqlConnection.execute(mySqlQuery, profile)
        return "Updated profile successfully"
    }   catch (error) {
        console.log(error)
    }

}