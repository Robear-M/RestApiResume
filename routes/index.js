const router = require('express').Router();
const db = require('../config/db');

const {
     getRoutes
} = require('../controllers/routeController')

const {
    getResume
} = require('../controllers/resumeController')

const {
    getProjects
} = require('../controllers/projectController')

const {
    getContacts
} = require('../controllers/contactController.js')

const {
    getExperience
} = require('../controllers/experienceController')

const {
    getConnects,
    createConnect
} = require('../controllers/connectController')

const {
    getEducation
} = require('../controllers/educationController.js')

const {
    getSkills
} = require('../controllers/skillsController.js')

//console.log("\nDEBUG INSIDE INDEx.JS\n")
router.route('/api')
.get(getRoutes)


router.route('/api/resume')
.get(getResume)


router.route('/api/projects')
.get(getProjects)


router.route('/api/contact')
.get(getContacts)


router.route('/api/experience')
.get(getExperience)

router.route('/api/education')
.get(getEducation)

router.route('/api/skills')
.get(getSkills)

router.route('/api/connect')
.get(getConnects)
.post(createConnect)


module.exports = router