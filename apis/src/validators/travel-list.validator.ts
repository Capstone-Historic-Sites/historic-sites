export const travelListHistoricSiteIdValidator = {
    travelListHistoricSiteId: {
        isUUID: {
            errorMessage: "please provide a valid Historic Site Id"
        },
        trim:true,
    }
}

// export const travelListRankValidator = {
//     travelListRank: {
//         isInt: {
//             errorMessage: "please provide a valid number"
//         },
//     }
// }


export const travelListValidator = {
    ...travelListHistoricSiteIdValidator
}