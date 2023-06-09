const { Dog } = require("../db");
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
// var Sequelize = require('sequelize');
// const Op = Sequelize.Op;
const { API_KEY } = process.env;
const headers = { "x-api-key": API_KEY };

const getDogsPromiseAll = (req, res) => {

    //guardar las urls en un arreglo con un bucle for
    const urls = [];
    for (let i = 260; i < 266; i++) {
        urls.push(`${URL}/${i}`);
    }

    // Función que realiza la solicitud utilizando Axios
    const makeRequest = (url) => {
        return axios
            .get(url, { headers })
            .then((response) => {
                const simpleDog = {
                    id: response.data.id,
                    // image: response.data.image.url,
                    name: response.data.name,
                    weight: response.data.weight.metric,
                    height: response.data.height.metric,
                    life_span: response.data.life_span,
                    // temperament: response.data.temperament
                };
                return simpleDog;
            })
            .catch((error) => {
                console.log("Error:", error);
                return `El id no corresponde a ningún perro de la api`;
            });
    };

    // Array para almacenar los datos de las respuestas
    const allDogs = [];

    // Array para almacenar todas las promesas de solicitud
    const requestPromises = [];

    // Bucle for para generar las solicitudes
    for (const url of urls) {
        const promise = makeRequest(url).then((responseData) => {
            allDogs.push(responseData); // Guarda los datos en el array
        });
        requestPromises.push(promise);
    }

    // Ejecutar todas las solicitudes de forma asíncrona utilizando Promise.all
    Promise.all(requestPromises)
        .then(() => {
            allDogs.sort((a, b) => a.id - b.id); // Ordenar allDogs por id
            return res.json(allDogs);
        })
        .catch((error) => {
            console.error("Error al realizar las solicitudes:", error);
        });
};

module.exports = { getDogsPromiseAll };
