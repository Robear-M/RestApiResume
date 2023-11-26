const {Resume} = require('../models');
const {ObjectId} = require('mongodb');

module.exports = {
    getResume(req, res) {
        console.log("From the Resume Controller\n")
        Resume.find()
        .populate('projects')
        .populate('contacts')
        .populate('experience')
        .populate('education')
        .populate('skills')
        .populate('connections')
            .then((resume) => res.json(resume))
            .catch((err) => res.status(500).json(err))
    },
    createResume(req, res){
        Resume.create(req.body)
        .then((resume) => res.json(resume))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    }
}