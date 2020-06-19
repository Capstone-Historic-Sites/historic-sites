export const imageValidator = {
    imageName: {
        isLength: {
            errorMessage: "the name provided for this image is too long",
            options: {min:1,max:32}
        },
        trim: true,
        escape: true
    },
    imagePath: {
        isLength: {
            errorMessage: "the url for this image is too long",
            options: {min:1,max:255}
        },
        trim: true,
        escape: true
    }
}

export const imageIdValidator = {
    imageId:{
        isUUID: {
            errorMessage: "please provide a valid imageId"
        },
        trim:true,
        in: ["params"]
    }
}

export const imageHistoricSiteIdValidator = {
    imageHistoricSiteId:{
        isUUID: {
            errorMessage: "please provide a valid historicSiteId"
        },
        trim:true,
    }
}

export const postImageValidator = {
    ...imageHistoricSiteIdValidator,
    ...imageValidator
}