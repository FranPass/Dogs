const { Dog, Temperament } = require("../db");
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
const { API_KEY } = process.env;
const headers = { "x-api-key": API_KEY };

const getDogDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const regexExpUUID =
            /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
        if (regexExpUUID.test(id)) {
            let dog = await Dog.findOne({ 
                where: { id },
                include: {
                    model: Temperament,
                    through: {
                        attributes: []
                    }
                }
            });
            dog.dataValues.temperaments = dog.temperaments.map(temp => (temp.name)).join(', ')
            return res.json(dog);
        }
        const {data} = await axios.get(`${URL}`, { headers });
        const dogData = data.find((dog) => dog.id === Number(id));
        const dog = {
            id: id,
            image: dogData.image.url,
            name: dogData.name,
            weight: dogData.weight.metric,
            height: dogData.height.metric,
            life_span: dogData.life_span,
            temperaments: dogData.temperament,
        };
        return res.json(dog);
    } catch (error) {
        return res.status(404).json({
            image: 'https://digitalsynopsis.com/wp-content/uploads/2016/12/http-status-codes-dogs-404.jpg',
            title: 'Dog not found'
        });
    }
};

module.exports = { getDogDetails };
