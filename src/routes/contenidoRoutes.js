const express=require("express");
const router=express.Router();
const {verificarToken}=require("../middlewares/authMiddleware");
const contenidoController=require("../controllers/contenidoController");


router.get("/contenidos",verificarToken,contenidoController.getContenidos);
router.post("/contenidos",verificarToken,contenidoController.createContenido);
router.delete("/contenidos/:id", verificarToken ,contenidoController.deleteContenido)
router.put("/contenidos/:id", verificarToken ,contenidoController.updateContenido)

module.exports=router;




