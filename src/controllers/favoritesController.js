const contenidoService = require("../services/contenidoService");

async function getFavorites(req, res) {
    try {
        const userId = req.user.userId;
        const favorites = await contenidoService.getFavoritos(userId);
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function addFavorite(req, res) {
    try {
        const userId = req.user.userId;
        const { id } = req.body;
        if (!id) return res.status(400).json({ message: "ID de contenido requerido" });

        const result = await contenidoService.addFavorito(id, userId);
        res.status(200).json({ message: "Agregado a favoritos", data: result });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function removeFavorite(req, res) {
    try {
        const userId = req.user.userId;
        const { id } = req.params;
        const result = await contenidoService.removeFavorito(id, userId);
        res.status(200).json({ message: "Eliminado de favoritos", data: result });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getFavorites,
    addFavorite,
    removeFavorite
}
