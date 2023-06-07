const {Dog} = require('../db')
const axios = require('axios');
const URL = 'https://api.thedogapi.com/v1/breeds';

const getDogDetails = (req, res) => {
    const {id} = req.params;

    axios.get(`${URL}/${id}`)
    .then((response) => {
        if(response.data) return res.status(200).json(response.data)
    })
    // .then(async (response) => {
    //     response.data = await Dog.findOne({where: {id}})
    
    //     if(!response.data) throw new Error('No se encontró ningún perro con ese id')
    //     return res.json(response.data)
    // })
    .catch((error) => {
        res.status(404).send(error.message)
    })
};

module.exports = {getDogDetails}