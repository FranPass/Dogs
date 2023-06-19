const { Temperament } = require("../db");
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";

const getTemperaments = async (req, res) => {

    try {
        const {data} = await axios.get(`${URL}`)
        const repetedTemperaments = data.map((dog) => dog.temperament).join(", ").split(", ");
            
            const setOfTemperaments = new Set(repetedTemperaments);
            setOfTemperaments.delete('')
            const temperaments = []
            setOfTemperaments.forEach(temp => temperaments.push({name: temp}))
            
            const dbTemps = await Temperament.findAll()
            if (dbTemps.length) return res.status(200).json(dbTemps);
            await Temperament.bulkCreate(temperaments);
            dbTemps = await Temperament.findAll()

            return res.status(200).json(dbTemps);
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = { getTemperaments };
