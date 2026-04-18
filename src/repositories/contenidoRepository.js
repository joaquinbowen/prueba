const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getContenidos(usuarioId) {
    return await prisma.contenido.findMany({
        where: {
            usuarioId: usuarioId
        }
    }
    );
}

async function createContenido(data, usuarioId) {
    return await prisma.contenido.create({ data: { ...data, usuarioId } })
}

async function updateContenido(id, data, usuarioId) {
    const contenidoId = parseInt(id);
    if (isNaN(contenidoId)) {
        throw new Error("ID de tarea invalido")
    }
    try {
        return await prisma.contenido.update({
            where: { id: contenidoId },
            data: { nombre: data.nombre, generoId: data.generoId }
        })
    } catch (error) {
        if (error.code === 'P2025') {
            throw new Error("Contenido no encontrada");
        }
        throw error;
    }

}

async function deleteContenido(id, usuarioId) {
    const contenidoId = parseInt(id);
    if (isNaN(contenidoId)) {
        throw new Error("ID de tarea invalido")
    }
    try {
        return await prisma.contenido.delete({ where: { id: contenidoId } });
    } catch (error) {
        if (error.code === 'P2025') {
            throw new Error("Contenido no encontrada");
        }
        throw error;
    }
}

async function getFavoritos(usuarioId) {
    return await prisma.contenido.findMany({
        where: {
            usuarioId: usuarioId,
            favorito: true
        },
        include: {
            genero: true
        }
    });
}

async function countFavoritos(usuarioId) {
    return await prisma.contenido.count({
        where: {
            usuarioId: usuarioId,
            favorito: true
        }
    });
}

async function searchContenidos(usuarioId, query) {
    return await prisma.contenido.findMany({
        where: {
            usuarioId: usuarioId,
            nombre: {
                contains: query
            }
        },
        include: {
            genero: true
        }
    });
}

async function updateFavorito(id, usuarioId, favorito) {
    const contenidoId = parseInt(id);
    return await prisma.contenido.update({
        where: { id: contenidoId },
        data: { favorito }
    });
}

module.exports = {
    getContenidos,
    createContenido,
    deleteContenido,
    updateContenido,
    getFavoritos,
    countFavoritos,
    searchContenidos,
    updateFavorito
}