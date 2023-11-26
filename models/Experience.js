const {Schema, model} = require('mongoose');

const experienceSchema = new Schema(
    {
        title: {
            type: String,
        },
        company: {
            type: String,
        },
        range: {
            type: String,
        },
        role: {
            type: Array
        },
    },
    {
        toJSON: {
            virtuals: false,
        },
        id: false,
    }
)

const Experience = model('experience', experienceSchema)

module.exports = Experience