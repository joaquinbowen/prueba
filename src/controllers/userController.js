const userService = require("../services/userService");

async function patchPremium(req, res) {
    try {
        const userId = req.user.userId;
        const result = await userService.makeUserPremium(userId);
        res.status(200).json({ message: "Usuario actualizado a Premium", data: result });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    patchPremium
}
