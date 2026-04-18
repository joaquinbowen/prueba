const express = require("express");
const router = express.Router();
const catalogController = require("../controllers/catalogController");
const { verificarToken } = require("../middlewares/authMiddleware");

router.get("/catalog/search", verificarToken, catalogController.searchCatalog);

module.exports = router;
