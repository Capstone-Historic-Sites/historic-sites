import {connect} from "../../src/database"

export async function selectTravelListCount(profileId: string) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT COUNT(*) AS count FROM travelList WHERE travelListProfileId = UUID_TO_BIN(:profileId)'
        const [count] = await mySqlConnection.execute(mySqlQuery, {profileId})
        // @ts-ignore
        if (count.length > 0) {
            // @ts-ignore
            return {...count[0]}
        }
    } catch (error) {
        console.log(error)
    }
}