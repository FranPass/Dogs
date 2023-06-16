const { Temperament } = require("../db");
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";

const getTemperaments = (req, res) => {



    axios
        .get(`${URL}`)
        .then(async (response) => {
            const repetedTemperaments = response.data.map((dog) => dog.temperament).join(", ").split(", ");
            
            const setOfTemperaments = new Set(repetedTemperaments);
            const temperaments = []
            setOfTemperaments.forEach(temp => temp !== '' && temperaments.push({name: temp}))
            
            await Temperament.bulkCreate(temperaments);

            return res.status(200).json({temperaments: [...setOfTemperaments]});
        })
        .catch((error) => res.status(500).send(error.message));
};

module.exports = { getTemperaments };
