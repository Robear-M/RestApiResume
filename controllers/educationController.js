const {Education} = require('../models');
const {ObjectId} = require('mongodb');

module.exports = {
    getEducation(req, res) {
        Education.find()
            .then((education) => res.json(education))
            .catch((err) => res.status(500).json(err))
    },
    createEducation(req, res){
        Education.create(req.body)
        .then((education) => res.json(education))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    }
}