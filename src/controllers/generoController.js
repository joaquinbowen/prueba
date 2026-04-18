const generoService = require("../services/generoService");

async function getGeneros(req, res) {
    try {
        const generos = await generoService.getGeneros();
        console.log(generos);
        res.status(200).json({ message: "Libros obtenidos correctamenteeeee", data: generos})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

async function createGenero(req, res) {
    try {
    const genero = await generoService.createGenero(req.body);
    res.status(200).json({ message: "Libro creado correctamente", data: genero });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports={
    createGenero,
    getGeneros
}