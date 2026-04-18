const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getGeneros() {
    return await prisma.genero.findMany();
}

async function createGenero(data) {
    return await prisma.genero.create({data})
}

module.exports={
    getGeneros,
    createGenero
}