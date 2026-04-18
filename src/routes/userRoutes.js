const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { verificarToken } = require("../middlewares/authMiddleware");

router.patch("/users/premium", verificarToken, userController.patchPremium);

module.exports = router;
