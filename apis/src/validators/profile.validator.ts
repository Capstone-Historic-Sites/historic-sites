export const profileValidator = {
    profileName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Profile name must be between 3 and 32 characters',
            options: { min: 3, max: 32 }
        }
    },
    profileOrganization: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Organization name must be less than 128 characters',
            options: { max: 128 }
        }
    },
    profilePassword: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: { min: 8 }
        }
    }
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