const models = require("../models");

const signup = async (req, res) => {
  const profil = {
    firstname: "",
    lastname: "",
    src: "https://img.favpng.com/2/12/12/computer-icons-portable-network-graphics-user-profile-avatar-png-favpng-L1ihcbxsHbnBKBvjjfBMFGbb7.jpg",
  };

  try {
    const users = await models.auth.insert(req.body);
    const profils = await models.auth.insertProfils(profil, users[0].insertId);
    res.status(201).json({
      ...users,
      id: users[0].insertId,
      profils_id: profils[0].insertId,
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = {
  signup,
};
