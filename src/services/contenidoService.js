const contenidoRepository = require("../repositories/contenidoRepository");
const userRepository = require("../repositories/userRepository");


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


async function getFavoritos(usuarioId) {
    return await contenidoRepository.getFavoritos(usuarioId);
}

async function addFavorito(id, usuarioId) {
    const user = await userRepository.obtenerPorId(usuarioId);
    if (!user) throw new Error("Usuario no encontrado");

    // Rol "premium" (case-insensitive for safety, but I'll use lowercase as it's common)
    const isPremium = user.rol.toLowerCase() === "premium";

    if (!isPremium) {
        const count = await contenidoRepository.countFavoritos(usuarioId);
        if (count >= 5) {
            throw new Error("Límite de 5 favoritos alcanzado para usuarios no Premium");
        }
    }

    return await contenidoRepository.updateFavorito(id, usuarioId, true);
}

async function removeFavorito(id, usuarioId) {
    return await contenidoRepository.updateFavorito(id, usuarioId, false);
}

async function search(usuarioId, query) {
    if (!query) return await contenidoRepository.getContenidos(usuarioId);
    return await contenidoRepository.searchContenidos(usuarioId, query);
}

module.exports = {
    getContenidos,
    createContenido,
    deleteContenido,
    updateContenido,
    getFavoritos,
    addFavorito,
    removeFavorito,
    search
}