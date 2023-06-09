const {Dog, Temperament} = require('../db')
const axios = require('axios');
const URL = 'https://api.thedogapi.com/v1/breeds';
const {API_KEY} = process.env;
const headers = {'x-api-key': API_KEY};

const getDogs =  async (req, res) => {
    
    const allDogsDb = await Dog.findAll()
    

    axios.get(`${URL}`, {headers})
    .then((response)=>{
        const allDogsApi = response.data.map(dog => {
            return {
                id: dog.id,
                image: dog.image.url,
                name: dog.name,
                weight: dog.weight.metric,
                height: dog.height.metric,
                life_span: dog.life_span,
                temperament: dog.temperament
            }
        })
        const allDogs = [...allDogsApi, ...allDogsDb]
        return res.status(200).json(allDogs)
    })
    .catch((error) => res.status(500).send(error.message))
}

module.exports = {getDogs}