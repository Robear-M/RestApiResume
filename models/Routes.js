const {Schema, model} = require('mongoose')

//console.log("\nDEBUG INSIDE MODEL\n")


const routeSchema = new Schema(
    {
        routes: {
            type: Array,
            required: true,
        }
    },
    {
        toJSON: {
            virtuals: false,
        },
        id: false,
    }
)

const Route = model('route', routeSchema)

module.exports = Route