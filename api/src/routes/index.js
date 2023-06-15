const { Router } = require('express');
const {getDogsComplete} = require('../controllers/getDogsComplete');
// const {getDogs} = require('../controllers/getDogs');
// const {getDogsByName} = require('../controllers/getDogsByName');
const {postNewDog} = require('../controllers/postNewDog');
const {getDogDetails} = require('../controllers/getDogDetails');
const {getTemperaments} = require('../controllers/getTemperaments')


const router = Router();

router.get('/dogs', getDogsComplete)
// router.get('/dogs/name', getDogsByName)
router.get('/temperaments', getTemperaments)
router.post('/dogs', postNewDog)
router.get('/dogs/:id', getDogDetails)

module.exports = router;
