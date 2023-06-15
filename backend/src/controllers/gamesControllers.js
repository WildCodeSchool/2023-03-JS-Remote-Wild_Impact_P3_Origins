const models = require("../models");

const browse = (req, res) => {
  models.games
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
  models.games
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

const add = (req, res) => {
  const games = req.body;
  const { label, acronyme, src, alt, logo } = games;
  models.games
    .insert(label, acronyme, src, alt, logo)
    .then(([result]) => {
      res
        .location(`/games/${result.insertId}`)
        .status(201)
        .json({
          id: result.insertId,
          ...games,
        });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  add
};
