const {Schema, model} = require('mongoose');

const skillsSchema = new Schema(
    {
        skills: {
            type: Array,
        },
    },
    {
        toJSON: {
            virtuals: false,
        },
        id: false,
    }
)

const Skills = model('skills', skillsSchema)

module.exports = Skills