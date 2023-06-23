const { Dog, Temperament } = require("../db");

const postNewDog = async (req, res) => {
    try {
        const {
            name,
            image,
            min_height,
            max_height,
            min_weight,
            max_weight,
            min_life_span,
            max_life_span,
            temperaments,
        } = req.body;
        const defaultImage =
            "https://cdn.dribbble.com/users/72790/screenshots/3333814/media/9c8536e9fec33b31959b9ce3843ab567.png";
        const [newDog, created] = await Dog.findOrCreate({
            where: {
                name,
            },
            defaults: {
                image: image !== "" ? image : defaultImage,
                height: max_height
                    ? `${min_height} - ${max_height}`
                    : `${min_height}`,
                weight: max_weight
                    ? `${min_weight} - ${max_weight}`
                    : `${min_weight}`,
                life_span: max_life_span
                    ? `${min_life_span} - ${max_life_span} years`
                    : `${min_life_span} years`,
            },
        });

        const response = {
            dogDataEmpty: {
                name: "",
                image: "",
                min_height: "",
                max_height: "",
                min_weight: "",
                max_weight: "",
                min_life_span: "",
                max_life_span: "",
                temperaments: [],
            },
            successResponse: created
                ? "The dog has been created successfully"
                : "There is already a dog with the same name. Please try another",
            created: created,
        };
        if (created) {
            for (let i = 0; i < temperaments.length; i++) {
                const newDogTemperament = await Temperament.findByPk(
                    temperaments[i].id
                );
                await newDog.addTemperament(newDogTemperament);
            }
            return res.json(response);
        }
        return res.status(500).json(response);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = { postNewDog };
