const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function crearUser(data) {
    return await prisma.usuario.create({ data });
}

async function obtenerPorEmail(email) {
    return await prisma.usuario.findUnique({ where: { email } })
}

async function obtenerPorId(id) {
    return await prisma.usuario.findUnique({ where: { id: parseInt(id) } });
}

async function updateUserRole(id, rol) {
    return await prisma.usuario.update({
        where: { id: parseInt(id) },
        data: { rol }
    });
}

module.exports = {
    crearUser,
    obtenerPorEmail,
    obtenerPorId,
    updateUserRole
}