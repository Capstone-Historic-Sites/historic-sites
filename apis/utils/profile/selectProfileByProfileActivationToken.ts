import {connect} from "../../src/database";

export async function selectProfileByProfileActivationToken(profileActivationToken: string) {
        try {
                const mySqlConnection = await connect()
                const mySqlQuery = 'SELECT BIN_TO_UUID(profileId) as profileId, profileActivationToken, profileDateAdded, profileEmail, profileHash, profileIsAdmin, profileName, profileOrganization FROM profile WHERE profileActivationToken = :profileActivationToken'
                const [rows] = await mySqlConnection.execute(mySqlQuery, {profileActivationToken})
                //@ts-ignore
                return rows.length !== 0 ? {...rows[0]} : undefined
        } catch (error) {
                console.error(error)
                return error.message
        }
}
