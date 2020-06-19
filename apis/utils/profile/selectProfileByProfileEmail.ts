import {connect} from '../../src/database'

export async function selectProfileByProfileEmail(profileEmail: string) {
        try {
                const mySqlConnection = await connect()
                const mySqlQuery = 'SELECT BIN_TO_UUID(profileId) as profileId, profileActivationToken, profileDateAdded, profileEmail, profileHash, profileIsAdmin, profileName, profileOrganization FROM profile WHERE profileEmail = :profileEmail'
                const [rows] = await mySqlConnection.execute(mySqlQuery, {profileEmail});
                //@ts-ignore
                return rows.length !== 0 ? {...rows[0]} : undefined
        } catch (error) {
                console.error(error)
                return error.message
        }
}