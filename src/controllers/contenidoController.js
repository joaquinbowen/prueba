const contenidoService = require("../services/contenidoService");

async function getContenidos(req, res) {
    try {
        const usuarioId = req.user.userId;
        const contenidos = await contenidoService.getContenidos(usuarioId);
        console.log(contenidos);
        res.status(200).json({ message: "Algunos contenidos pueden ser clasificacion R", data: contenidos })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

async function createContenido(req, res) {
    try {

        const usuarioId = req.user.userId;
        const contenido = await contenidoService.createContenido(req.body, usuarioId);

        res.status(200).json({ message: "Libro creado correctamente", data: contenido });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteContenido(req, res) {
    try {
        const usuarioId = req.user.userId;
        const contenidoId = req.params.id;
        const contenido = await contenidoService.deleteContenido(contenidoId, usuarioId);
        res.status(200).json({ message: "Contenido eliminada correctamente", data: contenido })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateContenido(req, res) {
    try {
        const usuarioId = req.user.userId;
        const contenidoId = req.params.id;
        const contenido = await contenidoService.updateContenido(contenidoId, req.body, usuarioId);
        res.status(200).json({ message: "Contenido editado correctamente", data: contenido })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getContenidos,
    createContenido,
    deleteContenido,
    updateContenido

}