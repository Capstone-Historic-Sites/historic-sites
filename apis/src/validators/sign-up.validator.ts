export const signUpValidator = {
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        normalizeEmail: true,
        trim: true
    },
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
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    }
}