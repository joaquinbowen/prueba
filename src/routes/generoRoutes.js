const express=require("express");
const router=express.Router();
const {verificarToken}=require("../middlewares/authMiddleware");
const generoController=require("../controllers/generoController");


router.get("/generos",verificarToken,generoController.getGeneros);
router.post("/generos",verificarToken,generoController.createGenero);

module.exports=router;