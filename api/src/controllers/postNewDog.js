const {Dog} = require('../db');

const postNewDog = async (req, res) => {
    
    try {
        const {name, height, weight, life_span, temperament} = req.body;
        if(!name || !height || !weight || !life_span) res.status(400).send('Faltan datos')
        const newDog = await Dog.findOrCreate({where: {name, height, weight, life_span}})
        res.json(newDog)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {postNewDog}