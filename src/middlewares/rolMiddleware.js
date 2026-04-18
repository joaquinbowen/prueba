function autorizarRoles(...rolesPermitidos){
    return (req,res,next)=>{
        const usuario=req.user
        if(!usuario){
            return res.status(401).json({message:"usuario no autenticado"});
        }
        if(!rolesPermitidos.includes(usuario.rol)){
            return res.status(403).json({message:"usuario no autorizado"})
        }
        next();
    }
}

module.exports={
    autorizarRoles
}