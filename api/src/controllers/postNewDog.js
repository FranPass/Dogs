const { Dog, Temperament } = require("../db");

const postNewDog = async (req, res) => {
    try {
        const { name, height, weight, life_span, temperaments } = req.body;

        if (!name || !height || !weight || !life_span)
            return res.status(400).send("Faltan datos");

        if (!temperaments.length)
            return res.status(400).send("Selecciona al menos un temperamento");

        const [newDog] = await Dog.findOrCreate({
            where: { name, height, weight, life_span },
        });

        for (let i = 0; i < temperaments.length; i++) {
            const temperament = await Temperament.findByPk(temperaments[i]);
            await newDog.addTemperament(temperament);
        }

        return res.json(newDog);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = { postNewDog };