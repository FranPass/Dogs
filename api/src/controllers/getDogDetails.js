const { Dog, Temperament, dog_temperament } = require("../db");
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
            const foundDog = await Dog.findOne({ where: { id } });
            const dogTemps = await dog_temperament.findAll({
                where: { dogId: id },
            });
            const idTemps = dogTemps.map((obj) => obj.dataValues.temperamentId);
            const temps = await Promise.all(
                idTemps.map(async (e) => {
                    const tempName = await Temperament.findByPk(e);
                    return tempName.dataValues.name;
                })
            );
            foundDog.dataValues.temperament = temps.join(", ");

            if (!foundDog)
                return res.status(404).send("No existe ningun perro con ese id");

            return res.json(foundDog);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }

    try {
        const response = await axios.get(`${URL}`, { headers });
        const findDog = response.data.find((dog) => dog.id === Number(id));
        if (!findDog)
            return res.status(404).send("No existe ningun perro con ese id");
        const foundDog = {
            id: id,
            image: findDog.image.url,
            name: findDog.name,
            weight: findDog.weight.metric,
            height: findDog.height.metric,
            life_span: findDog.life_span,
            temperament: findDog.temperament,
        };
        return res.json(foundDog);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = { getDogDetails };
