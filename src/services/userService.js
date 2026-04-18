const userRepository = require("../repositories/userRepository");

async function makeUserPremium(userId) {
    const user = await userRepository.obtenerPorId(userId);
    if (!user) throw new Error("Usuario no encontrado");

    return await userRepository.updateUserRole(userId, "premium");
}

module.exports = {
    makeUserPremium
}
