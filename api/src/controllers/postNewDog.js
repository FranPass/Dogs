const { Dog, Temperament } = require("../db");

const postNewDog = async (req, res) => {
    try {
        const { name, image, height, weight, life_span, temperament } = req.body;
        if (!name || !image || !height || !weight || !life_span)
            return res.status(400).send("Faltan datos");

        if (!temperament.length)
            return res.status(400).send("Selecciona al menos un temperamento");

        const [newDog] = await Dog.findOrCreate({
            where: { name, image, height: height, weight: weight, life_span: life_span + ' years'},
        });

        for (let i=0; i<temperament.length; i++) {
            const newDogTemperament = await Temperament.findByPk(temperament[i].id);
            await newDog.addTemperament(newDogTemperament);
        }

        return res.json({success: 'The dog has been created successfully'});
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = { postNewDog };
