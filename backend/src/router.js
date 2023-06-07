const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");
const videosControllers = require("./controllers/videosControllers");
const teamsControllers = require("./controllers/teamsControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

router.get("/videos", videosControllers.browse); // Récupère All
router.get("/videos/:id", videosControllers.read); // Récupère par id

router.get("/teams", teamsControllers.browse); // Récupère All
router.get("/teams/id", teamsControllers.browse); // Récupère All

module.exports = router;
