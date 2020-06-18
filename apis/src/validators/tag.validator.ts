export const postTagValidator = {
    historicSiteTagHistoricSiteId: {
        isUUID: {
            errorMessage: "please provide a valid Historic Site ID"
        },
        trim:true,
    }, historicSiteTagTagId: {
        isUUID: {
            errorMessage: "please provide a valid Tag ID"
        },
        trim:true,
    }
}

export const historicSiteTagHistoricSiteIdValidator = {
    historicSiteId:{
        isUUID: {
            errorMessage: "please provide a valid Historic Site Id"
        },
        trim:true,
        in: ["params"]
    }
}