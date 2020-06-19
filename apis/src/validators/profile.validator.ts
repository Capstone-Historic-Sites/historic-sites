export const profileValidator = {
    profileActivationToken: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileActivationToken must be null or thirty two characters',
            options: { min: 4, max: 32 }
        }
    },
    profilePassword: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profile password must not be empty',
            options: { min: 1,}
        }
    },
    profileName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profile name must be between three and thirty two characters',
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

export const profileEmailValidator = {
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        normalizeEmail: true,
        trim: true
    },
}

export const updateProfileValidator = {
    ...profileIdValidator,
    ...profileEmailValidator,
    ...profileValidator
}