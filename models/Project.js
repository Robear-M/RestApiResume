const {Schema, model} = require('mongoose');

const projectSchema = new Schema(
    {
        name: {
            type: String,
        },
        repo: {
            type: String,
        },
        site: {
            type: String,
        },
        description: {
            type: String,
        },
        techStack: {
            type: Array,
        }
    },
    {
        toJSON: {
            virtuals: false,
        },
        id: false,
    }
)

const Project = model('project', projectSchema)

module.exports = Project