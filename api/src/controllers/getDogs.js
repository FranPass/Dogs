const {Dog} = require('../db')
const axios = require('axios');
const URL = 'https://api.thedogapi.com/v1/breeds';
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const getDogs =  (req, res) => {
    const {name} = req.query;
    
    if(name) {
        const search = '/search?q='

        axios.get(`${URL}${search}${name}`)
        .then((response)=>{
            const dogsFromApi = response.data
            return dogsFromApi
        })
        .then(async(response) => {
            const dogsFromDb = await Dog.findAll({where: {name: {[Op.iLike]: `%${name}%`}}})

            if(!dogsFromDb[0] && !response[0]) throw new Error('No se encontró ningun perro con ese nombre')
            if(!dogsFromDb[0]) return res.status(200).json(response)
        
            return res.status(200).json([...response, ...dogsFromDb])
        })
        .catch((error) => res.status(404).send(error.message))
    }
    else {
        axios.get(`${URL}`)
        .then((response)=>{
            return res.status(200).json(response.data)
        })
        .catch((error) => res.status(500).send(error.message))
    }
    

}

module.exports = {getDogs}

