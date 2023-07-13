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
      res
        .location(`/videos/${result.insertId}`)
        .status(201)
        .json({ ...video, id: result.insertId });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const video = req.body;
  const videoId = parseInt(video.id, 10);

  models.videos
    .update(video, videoId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).json({ msg: "Modification non effetuée" });
      } else {
        res.status(201).json({ msg: "Votre modification a été effectué" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.videos
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.status(201).json({ msg: "Votre suppression à été effectué" });
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
