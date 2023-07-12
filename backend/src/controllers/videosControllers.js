const models = require("../models");

const browse = async (req, res) => {
  models.videos
    .findAll()
    .then((result) => {
      res.send(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.videos
    .find(id)
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
  const video = req.body;
  const gameId = parseInt(video.game_id, 10);
  models.videos
    .insert(video, gameId)
    .then(([result]) => {
      res.location(`/videos/add/${result.insertId}`).sendStatus(201);
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
        res.status(404).send("Modification non effetuée");
      } else {
        res.status(201).send("Votre modification a été effectué");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const teams = req.body;
  teams.id = parseInt(req.params.id, 10);
  models.teams
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.status(201).send("Votre suppression à été effectué");
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
  destroy,
};
