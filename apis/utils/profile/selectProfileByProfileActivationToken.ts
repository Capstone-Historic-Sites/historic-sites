import {connect} from "../../src/database";

export async function selectProfileByProfileActivationToken(profileActivationToken: string) {
        try {
                const mysqlConnection = await connect();

                const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(profileId) as profileId, profileActivationToken, profileDateAdded, profileEmail, profileHash, profileIsAdmin, profileName, profileOrganization FROM profile WHERE profileActivationToken = :profileActivationToken', {profileActivationToken});
                return rows
        } catch (e) {
                console.error(e)
                return undefined
        }
}
