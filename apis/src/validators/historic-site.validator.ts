export const historicSiteIdValidator = {
    historicSiteId: {
        isUUID: {
            errorMessage: 'Please provide a valid historicSiteId'
        },
        trim: true,
        in: ['params']
    }
}

export const historicSiteValidator = {
    historicSiteCost: {
        isLength: {
            errorMessage: 'Please input either Free or Paid',
            options: {min: 4, max: 4}
        },
        trim: true,
        escape: true
    },
    historicSiteDate: {
        isLength: {
            errorMessage: 'Please provide a date or date range no longer than 10 characters',
            options: {min: 1, max: 10}
        },
        trim: true,
        escape: true
    },
    historicSiteDescription: {
        isLength: {
            errorMessage: 'Please provide a description no longer than 600 characters',
            options: {min: 1, max: 600}
        },
        trim: true,
        escape: true
    },
    historicSiteMunicipality: {
        isLength: {
            errorMessage: 'Please provide a city and/or municipality no longer than 36 characters',
            options: {min: 1, max: 36}
        },
        trim: true,
        escape: true
    },
    historicSiteName: {
        isLength: {
            errorMessage: 'Please provide a name for the historic site no longer than 48 characters',
            options: {min: 1, max: 48}
        },
        trim: true,
        escape: true
    },
    historicSiteState: {
        isLength: {
            errorMessage: 'Please provide the two letter abbreviation for the state',
            options: {min: 2, max: 2}
        },
        trim: true,
        escape: true
    }
}

export const historicSiteTagTagIdValidator = {
    tagId: {
        isUUID: {
            errorMessage: 'Please provide a valid tagId'
        },
        trim: true,
        in: ['params']
    }
}

export const historicSiteSearchValidator = {
    search: {
        isLength: {
            errorMessage: 'Please provide a search term',
            options: {min: 1}
        },
        trim: true,
        escape: true,
        in: ['params']
    }
}

export const putHistoricSiteValidator = {
    ...historicSiteIdValidator,
    ...historicSiteValidator
}