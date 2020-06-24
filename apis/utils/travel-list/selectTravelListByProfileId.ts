import {connect} from "../../src/database";

export async function selectTravelListByProfileId(profileId : string) {
    try {
        const mysqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(historicSiteId) AS historicSiteId, BIN_TO_UUID(historicSiteProfileId) AS historicSiteProfileId, historicSiteCost, historicSiteDate, historicSiteDateAdded, historicSiteDescription, historicSiteLat, historicSiteLong, historicSiteMunicipality, historicSiteName, historicSiteState FROM travelList INNER JOIN historicSite ON travelList.travelListHistoricSiteId = historicSite.historicSiteId WHERE travelListProfileId = UUID_TO_BIN(:profileId)'
        const [rows] =  await mysqlConnection.execute(mySqlQuery, {profileId})
        return rows
    } catch (error) {
        console.log(error)
        return undefined
    }
}