export const signupValidator = {
        profileName: {
            escape: true,
            trim: true,
            isLength: {
                    errorMessage: 'profileName must be between three and thirty two characters',
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