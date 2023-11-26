const {Project} = require('../models');
const {ObjectId} = require('mongodb');

module.exports = {
    getProjects(req, res) {
        Project.find()
            .then((projects) => res.json(projects))
            .catch((err) => res.status(500).json(err))
    },
    createProject(req, res){
        Project.create(req.body)
        .then((project) => res.json(project))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    }
}