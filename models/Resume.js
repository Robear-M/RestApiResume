const {Schema, model} = require('mongoose')

const resumeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
        aboutMe: {
            type: String,
            required: true,
            unique: false,
            trim: true,
        },
        projects: [{
            type: Schema.Types.ObjectId,
            ref: 'project'
        }],
        experience: [{
            type: Schema.Types.ObjectId,
            ref: 'experience'
        }],
        education: [{
            type: Schema.Types.ObjectId,
            ref: 'education'
        }],
        skills: [{
            type: Schema.Types.ObjectId,
            ref: 'skills'
        }],
        contacts: {
            type: Schema.Types.ObjectId,
            ref: 'contact'
        },
        connections: [{
            type: Schema.Types.ObjectId,
            ref: 'connect'
        }]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

resumeSchema.virtual('projectCount').get(function(){
    return this.projects.length
})

const Resume = model('resume', resumeSchema)

module.exports =  Resume