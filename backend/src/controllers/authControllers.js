const models = require("../models");
const { checkPassword } = require("../services/auth");
const { createJwt } = require("../services/jwt");

const signup = async (req, res) => {
  try {
    const users = await models.auth.insert(req.body);
    await models.profils.insertProfils(users[0].insertId);

    res.status(201).json({ msg: "Compte créé, Merci de vous identifier." });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      res.sendStatus(409);
    } else {
      res.sendStatus(500);
    }
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
      .json({ role: user[0][0].role });
  } else {
    res.status(401).send("Wrong credentials");
  }
};

module.exports = {
  signup,
  signin,
};
