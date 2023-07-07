const models = require("../models");

const browse = (req, res) => {
  models.profils
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.profils
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = async (req, res) => {
  const profils = req.body;

  try {
    await models.users.update(profils.email, profils.id);
    await models.profils.update(
      profils.firstname,
      profils.lastname,
      profils.src,
      profils.id
    );
    res.sendStatus(204);
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      res.status(409).json({ msg: "Email déjà existant." });
    } else {
      res.sendStatus(500);
    }
  }
};

module.exports = {
  browse,
  read,
  edit,
};
