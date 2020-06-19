export const signInValidator = {
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        normalizeEmail: true,
        trim: true
    },
    profilePassword: {
        isLength: {
            errorMessage: 'Password must not be empty',
            options: { min: 1 }
        },
        trim: true,
        escape: true
    }
}