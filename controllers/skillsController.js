const {Skills} = require('../models');
const {ObjectId} = require('mongodb');

module.exports = {
    getSkills(req, res) {
        console.log('hello')
        Skills.find()
            .then((skills) => res.json(skills))
            .catch((err) => res.status(500).json(err))
    },
    createSkill(req, res){
        Skills.create(req.body)
        .then((skill) => res.json(skill))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    }
}