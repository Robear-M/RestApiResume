const {Schema, model} = require('mongoose');

const educationSchema = new Schema(
    {
        university: {
            type: String,
        },
        degree: {
            type: String,
        },
        date: {
            type: String,
        },
        gpa: {
            type: "number"
        },
    },
    {
        toJSON: {
            virtuals: false,
        },
        id: false,
    }
)

const Education = model('education', educationSchema)

module.exports = Education