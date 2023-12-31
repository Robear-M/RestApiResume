const {Routes} = require('../models');
const {ObjectId} = require('mongodb');


module.exports = {
    getRoutes(req, res) {
        Routes.find()
            .then((routes) => res.json(routes))
            .catch((err) => res.status(500).json(err))
    },
    createRoutes(req, res){
        Routes.create(req.body)
        .then((route) => res.json(route))
        .catch((err) => {
            return res.status(500).json(err);
        });
    }
}