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
  profils.id = parseInt(req.params.id, 10);

  try {
    await models.users.update(profils.email, profils.id);
    await models.profils.update(
      profils.firstname,
      profils.lastname,
      profils.src,
      profils.id
    );
    res.Status(204).send("Votre modifification a bien été enregistré");
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = {
  browse,
  read,
  edit,
};
