const contenidoRepository = require("../repositories/contenidoRepository");

async function getContenidos() {
    return await contenidoRepository.getContenidos();
}

async function createContenido(data) {
    return await contenidoRepository.createContenido(data);
}

async function updateContenido(id,data) {
    return await contenidoRepository.updateContenido(id,data);
}

async function deleteContenido(id) {
    return await contenidoRepository.deleteContenido(id);
}


module.exports = {
    getContenidos,
    createContenido,
    deleteContenido,
    updateContenido
    
    
}