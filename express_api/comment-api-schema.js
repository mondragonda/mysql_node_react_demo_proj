const CommentSchema = {
    email: { in: ['body'],
        isEmail: true,
        isLength: {
            options: { min: 1, max: 255 }
        }
    },
    text: { in: ['body'],
        isLength: {
            options: { min: 1, max: 65535 }
        }
    }
}

export { CommentSchema }