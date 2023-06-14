const models = require("../models");

const browse = (req, res) => {
  models.teams
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
  models.teams
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
  const teams = req.body;
  const { name, acronym, src, alt } = teams;
  models.teams
    .insert(name, acronym, src, alt)
    .then(([result]) => {
      res
        .location(`/teams/${result.insertId}`)
        .status(201)
        .json({
          id: result.insertId,
          ...teams,
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("essaye encore");
    });
};

module.exports = {
  browse,
  read,
  add,
};
