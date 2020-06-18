export const profileValidator = {
    profileActivationToken: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileActivationToken must be between three and thirty two characters',
            options: { min: 3, max: 32 }
        }
    },

    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid Email'
        },
        normalizeEmail: true,
        trim: true
    },
    profilePassword: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileActivationToken must be between three and thirty two characters',
            options: { min: 1,}
        }
    },
    profileName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileName must be between three and thirty two characters',
            options: { min: 3, max: 32 }
        }
    },
}

export const profileIdValidator = {
    profileId: {
        isUUID: {
            errorMessage: "Please provide a valid profile Id"
        },
        trim: true,
        in: ["params"]
    }
}

export const updateProfileValidator = {
    ...profileIdValidator,
    ...profileValidator
}