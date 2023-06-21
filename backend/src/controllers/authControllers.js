const models = require("../models");
const { checkPassword } = require("../services/auth");
const { createJwt } = require("../services/jwt");

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

const signin = async (req, res) => {
  const user = await models.auth.findUser(req.body.email);
  if (
    user[0] &&
    (await checkPassword(user[0][0].password, req.body.password))
  ) {
    const token = createJwt({ email: req.body.email, role: user[0][0].role });

    res
      .status(200)
      .cookie("ott_token", token, {
        httpOnly: true,
        expire: new Date() + 1000 * 60 * 60,
      })
      .send("Connected");
  } else {
    res.status(401).send("Wrong credentials");
  }
};

module.exports = {
  signup,
  signin,
};
