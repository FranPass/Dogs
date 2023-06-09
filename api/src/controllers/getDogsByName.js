const { Dog } = require("../db");
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
var Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { API_KEY } = process.env;
const headers = { "x-api-key": API_KEY };

const getDogsByName = async (req, res) => {
    const { name } = req.query;
    const allDogsDb = await Dog.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
    });


    const imageRequest = async (imageEndpoint) => {
        try {
            const response = await axios.get(imageEndpoint);
            return response.data.url;
        } catch (error) {
            return error.message;
        }
    };

    try {
        const response = await axios.get(`${URL}/search?q=${name}`, {headers});

        const allDogsApi = await Promise.all(response.data.map(async (dog) => {
            const imageEndpoint = `https://api.thedogapi.com/v1/images/${dog.reference_image_id}`;
            const imageURL = await imageRequest(imageEndpoint);

            return {
                id: dog.id,
                image: imageURL,
                name: dog.name,
                weight: dog.weight.metric,
                height: dog.height.metric,
                life_span: dog.life_span,
                temperament: dog.temperament,
            };
        }));
        const allDogs = [...allDogsApi, ...allDogsDb];
        if (!allDogs.length)
            return res.status(404).send("No hay coincidencias");
        return res.status(200).json(allDogs);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = { getDogsByName };
