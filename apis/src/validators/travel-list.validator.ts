export const travelListProfileIdValidator = {
    travelListProfileId: {
        isUUID: {
            errorMessage: "please provide a valid Profile Id"
        },
        trim: true
    }
}

export const travelListIdsValidator = {
    travelListProfileId: {
        isUUID: {
            errorMessage: "please provide a valid Profile Id"
        },
        trim:true,
    }, travelListHistoricSiteId: {
        isUUID: {
            errorMessage: "please provide a valid Historic Site Id"
        },
        trim:true,
    },
}

export const travelListRankValidator = {
    travelListRank: {
        isInt: {
            errorMessage: "please provide a valid number"
        },
    }
}


export const travelListValidator = {
    ...travelListRankValidator,
    ...travelListIdsValidator
}