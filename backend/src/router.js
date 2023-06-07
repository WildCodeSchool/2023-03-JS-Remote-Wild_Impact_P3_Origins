const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");
const videosControllers = require("./controllers/videosControllers");
const teamsControllers = require("./controllers/teamsControllers");
const profilsControllers = require("./controllers/profilsControllers");
const gamesControllers = require("./controllers/gamesControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

router.get("/videos", videosControllers.browse); // Récupère All
router.get("/videos/:id", videosControllers.read); // Récupère par id

router.get("/teams", teamsControllers.browse);
router.get("/teams/:id", teamsControllers.read);

router.get("/profils", profilsControllers.browse);
router.get("/profils/:id", profilsControllers.read);

router.get("/games", gamesControllers.browse);
router.get("/games/:id", gamesControllers.read);

module.exports = router;
