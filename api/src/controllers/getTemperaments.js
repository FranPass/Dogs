const {Temperament} = require('../db');
const axios = require('axios');
const URL = 'https://api.thedogapi.com/v1/breeds';

const getTemperaments = (req, res) => {

    axios.get(`${URL}`)
    .then( async (response)=>{
        const perritos = response.data;
        
        let unsplitedTemps = perritos.map(obj => obj.temperament)

        let aux = unsplitedTemps.join(', ').split(', ').filter((temp)=>temp!=='')

        let setOfTemperaments = new Set(aux)

        let temperaments = [];
        
        setOfTemperaments.forEach((temp) => {
            temperaments.push({name: temp})
        })
        console.log(temperaments[117]);
        await Temperament.bulkCreate(temperaments)

        return res.status(200).json(temperaments)
    })
    .catch((error) => res.status(500).send(error.message))

    
};

module.exports = {getTemperaments}