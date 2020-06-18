export const signupValidator = {
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid Email'
        },
        normalizeEmail: true,
        trim: true
    },

    profileName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileName must be between three and thirty two characters',
            options: { min: 3, max: 32 }
        }
    },
    profileOrganization: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Organization name must be less than 128 characters',
            options: { min: 0, max: 128 }
        }
    },
    profilePassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    },
    profilePasswordConfirm: {
        isLength: {
            errorMessage: 'Confirm password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    }
}