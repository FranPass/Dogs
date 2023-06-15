const { Dog, Temperament } = require("../db");
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
const { API_KEY } = process.env;
const headers = { "x-api-key": API_KEY };

const getDogDetails = async (req, res) => {
    const { id } = req.params;

    const regexExpUUID =
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

    if (regexExpUUID.test(id)) {
        try {
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
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    try {
        const {data} = await axios.get(`${URL}`, { headers });
        const findDog = data.find((dog) => dog.id === Number(id));
        if (!findDog)
            return res.status(404).json({error: "No existe ningun perro con ese id"});
        const foundDog = {
            id: id,
            image: findDog.image.url,
            name: findDog.name,
            weight: findDog.weight.metric,
            height: findDog.height.metric,
            life_span: findDog.life_span,
            temperaments: findDog.temperament,
        };
        return res.json(foundDog);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = { getDogDetails };
