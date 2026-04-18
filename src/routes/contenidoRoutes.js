const express=require("express");
const router=express.Router();
const {verificarToken}=require("../middlewares/authMiddleware");
const contenidoController=require("../controllers/contenidoController");
const {autorizarRoles}=require("../middlewares/rolMiddleware")


router.get("/contenidos",verificarToken,autorizarRoles("cliente", "premium"),contenidoController.getContenidos);
router.post("/contenidos",verificarToken,autorizarRoles("cliente", "premium"),contenidoController.createContenido);
router.delete("/contenidos/:id", verificarToken ,autorizarRoles("cliente", "premium"),contenidoController.deleteContenido)
router.put("/contenidos/:id", verificarToken ,autorizarRoles("cliente", "premium"),contenidoController.updateContenido)


module.exports=router;




