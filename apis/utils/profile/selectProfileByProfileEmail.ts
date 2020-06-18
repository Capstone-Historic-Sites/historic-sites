import {connect} from "../../src/database";
import {Profile} from "../interfaces/profile";

export async function selectProfileByProfileEmail(profileEmail: string) {
        try {
                const mysqlConnection = await connect();

                const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(profileId) as profileId, profileActivationToken, profileDateAdded, profileEmail, profileHash, profileIsAdmin, profileName, profileOrganization FROM profile WHERE profileEmail = :profileEmail', {profileEmail});
                //@ts-ignore
                return rows.length !== 0 ? {...rows[0]} : undefined;
        } catch (e) {
                console.error(e)
                return undefined
        }
}