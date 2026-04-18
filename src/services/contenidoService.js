const contenidoRepository = require("../repositories/contenidoRepository");

async function getContenidos(usuarioId) {
    return await contenidoRepository.getContenidos(usuarioId);
}

async function createContenido(data,usuarioId) {
    return await contenidoRepository.createContenido(data,usuarioId);
}

async function updateContenido(id,data,usuarioId) {
    return await contenidoRepository.updateContenido(id,data,usuarioId);
}

async function deleteContenido(id,usuarioId) {
    return await contenidoRepository.deleteContenido(id,usuarioId);
}


module.exports = {
    getContenidos,
    createContenido,
    deleteContenido,
    updateContenido
    
    
}