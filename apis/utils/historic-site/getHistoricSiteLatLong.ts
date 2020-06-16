let nodeGeocoder = require('node-geocoder')

let options = {
    provider: 'openstreetmap'
}

let geoCoder = nodeGeocoder(options)

export async function getHistoricSiteLatLong(historicSiteName: string) {
    try {
        return await geoCoder.geocode(historicSiteName)
    }
    catch (error) {
        console.log(error)
    }
}