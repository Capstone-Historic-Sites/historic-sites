let nodeGeocoder = require('node-geocoder')

let options = {
    provider: 'openstreetmap'
}

let geoCoder = nodeGeocoder(options)

export async function getHistoricSiteLatLong(historicSiteAddress: string, historicSiteMunicipality: string, historicSiteState: string) {
    geoCoder.geocode(`${historicSiteAddress}, ${historicSiteMunicipality} ${historicSiteState}`)
        .then((res: any) => {
            console.log(res)
            return res
        })
        .catch((error: any) => {
            console.log(error)
        })
}