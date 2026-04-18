const contenidoService = require("../services/contenidoService");

async function searchCatalog(req, res) {
    try {
        const userId = req.user.userId;
        const { q } = req.query;
        const results = await contenidoService.search(userId, q);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    searchCatalog
}
