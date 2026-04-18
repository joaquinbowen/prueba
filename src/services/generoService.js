const generoRepository = require("../repositories/generoRepository");

async function getGeneros() {
    return await generoRepository.getGeneros();
}

async function createGenero(data) {
    return await generoRepository.createGenero(data);
}


module.exports = {
    getGeneros,
    createGenero
}