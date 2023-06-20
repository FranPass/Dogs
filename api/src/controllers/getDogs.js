const { Dog, Temperament } = require("../db");
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
const { API_KEY } = process.env;
const headers = { "x-api-key": API_KEY };

const getDogs = async (req, res) => {
    try {
        const allDogsDb = await Dog.findAll({
            include: {
                model: Temperament,
                through: {
                    attributes: [],
                },
            },
        });
        allDogsDb.forEach(
            data =>
                (data.dataValues.temperament = data.temperaments.map((temp) => temp.name).join(", "))
        );
    
        const {data} = await axios.get(`${URL}`, { headers });
        const allDogsApi = data.map((dog) => {
            return {
                id: dog.id,
                image: dog.image.url,
                name: dog.name,
                weight: dog.weight.metric,
                height: dog.height.metric,
                life_span: dog.life_span,
                temperament: dog.temperament,
            };
        });
        const allDogs = [...allDogsApi, ...allDogsDb];
        
        if (!allDogs.length)
            return res.status(404).send("Dog not found");
    
        const {name} = req.query;
        if (name) {
            const dogsByName = allDogs.filter( dog => (dog.name).toLowerCase().includes(name.toLowerCase()) )
            if (!dogsByName.length) return res.status(200).json([{
                id: '',
                image: 'https://www.pawmaw.com/pawmaw/img/home/promo-shape-3.png',
                name: 'Dog not found',
                weight: '---',
                height: '---',
                life_span: '---',
                temperament: [],
            }])
            return res.json(dogsByName)
        }
        return res.status(200).json(allDogs);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = { getDogs };
