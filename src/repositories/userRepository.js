const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function crearUser(data) {
    return await prisma.usuario.create({ data });
}

async function obtenerPorEmail(email) {
    return await prisma.usuario.findUnique({ where: { email } })
}

async function cambiarPremium(id) {
    return await prisma.usuario.update({
        where:{id:id},
        data:{rol:"premium"}
    })
}

module.exports = {
    crearUser,
    obtenerPorEmail,
    cambiarPremium
}