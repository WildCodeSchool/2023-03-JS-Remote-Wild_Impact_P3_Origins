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
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const teams = req.body;
  teams.id = parseInt(req.params.id, 10);
  models.teams
    .update(teams)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res
          .status(404)
          .send("Modification non effetuée");
      } else {
        res.status(201).send("Votre modification a été effectué");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  add,
  edit,
};
