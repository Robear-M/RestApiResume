const {Schema, model} = require('mongoose');

const connectSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: false,
            trim: true,
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        },
        message: {
            type: String,
            required: true,
            unique: false,
            trim: true,
            maxlength: 400
        }
    },
    {
        toJSON: {
            virtuals: false,
        },
        id: false,
    }
)

const Connect = model('connect', connectSchema)

module.exports = Connect