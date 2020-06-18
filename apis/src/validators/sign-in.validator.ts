export const signInValidator = {
    profilePassword: {
        isLength: {
            errorMessage: 'Password must be at least a character',
            options: { min: 1 }
        },
        trim: true,
        escape: true
    }
}