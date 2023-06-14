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

const edit = (req, res) => {
  const teams = req.body;
  const { name, acronym, src, alt } = teams;
  // const id = parseInt(req.params.id);
  models.teams
    .update(name, acronym, src, alt)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("osskour");
      } else {
        res.status(204).json({ ...req.body });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("toujours pas");
    });
};

module.exports = {
  browse,
  read,
  add,
  edit,
};
