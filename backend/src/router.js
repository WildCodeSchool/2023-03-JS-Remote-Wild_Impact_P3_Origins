const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");
const videosControllers = require("./controllers/videosControllers");
const teamsControllers = require("./controllers/teamsControllers");
const profilsControllers = require("./controllers/profilsControllers");
const gamesControllers = require("./controllers/gamesControllers");
const authControllers = require("./controllers/authControllers");

const { checkUserData } = require("./services/auth");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

router.get("/videos", videosControllers.browse); // Récupère All
router.get("/videos/:id", videosControllers.read);
router.post("/admin/videos/add", videosControllers.add);
router.put("/admin/videos/:id", videosControllers.edit);
router.delete("/admin/videos/:id", videosControllers.destroy); // Publier All
// router.put("/videos/:id", videosControllers.edit); // Mettre a jour by Id // Récupère par id

router.get("/teams", teamsControllers.browse);
router.get("/teams/:id", teamsControllers.read);
router.post("/teams", teamsControllers.add);
router.put("/teams/:id", teamsControllers.edit);
router.delete("/teams/:id", teamsControllers.destroy);

router.get("/profils", profilsControllers.browse);
router.get("/profils/:id", profilsControllers.read);

router.get("/games", gamesControllers.browse);
router.get("/games/:id", gamesControllers.read);

router.post("/signup", checkUserData, authControllers.signup);

module.exports = router;
