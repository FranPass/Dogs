const { Router } = require('express');
const {getDogs} = require('../controllers/getDogs');
const {postNewDog} = require('../controllers/postNewDog');
const {getDogDetails} = require('../controllers/getDogDetails');
const {getTemperaments} = require('../controllers/getTemperaments')


const router = Router();

router.get('/dogs', getDogs)
router.post('/dogs', postNewDog)
router.get('/dogs/:id', getDogDetails)
router.get('/temperaments', getTemperaments)

module.exports = router;
