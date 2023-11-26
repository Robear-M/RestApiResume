const {Connect} = require('../models');
const {ObjectId} = require('mongodb');

module.exports = {
    getConnects(req, res) {
        Connect.find()
            .then((contacts) => res.json(contacts))
            .catch((err) => res.status(500).json(err))
    },
    createConnect(req, res){
        Connect.create(req.body)
        .then((contact) => res.json(contact))
        .catch((err) => {
            return res.status(500).json(err);
        });
    }
}