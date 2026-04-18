const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
//const verificarToken = require("../services/authServices");


router.post("/registrar", authController.registrarUsuario);
router.post("/login", authController.loginUsuario);
router.post("/logout",authController.logout);
router.put("/users/premium",authController.cambiarPremium)

module.exports = router