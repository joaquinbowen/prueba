const express = require("express");
const router = express.Router();
const favoritesController = require("../controllers/favoritesController");
const { verificarToken } = require("../middlewares/authMiddleware");

router.get("/favorites", verificarToken, favoritesController.getFavorites);
router.post("/favorites", verificarToken, favoritesController.addFavorite);
router.delete("/favorites/:id", verificarToken, favoritesController.removeFavorite);

module.exports = router;