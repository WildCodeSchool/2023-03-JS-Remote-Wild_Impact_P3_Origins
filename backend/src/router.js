const express = require("express");

const router = express.Router();

const videosControllers = require("./controllers/videosControllers");
const teamsControllers = require("./controllers/teamsControllers");
const profilsControllers = require("./controllers/profilsControllers");
const gamesControllers = require("./controllers/gamesControllers");
const authControllers = require("./controllers/authControllers");

const { checkUserData } = require("./services/checkUserData");
const { hashPassword } = require("./services/auth");
const { checkUser } = require("./services/jwt");

// Route public
router.get("/videos", videosControllers.browse); // Récupère All
router.get("/videos/:id", videosControllers.read); // Récupère par id

router.get("/teams", teamsControllers.browse);
router.get("/teams/:id", teamsControllers.read);

router.get("/games", gamesControllers.browse);
router.get("/games/:id", gamesControllers.read);

router.post("/signup", checkUserData, hashPassword, authControllers.signup);
router.post("/signin", checkUserData, authControllers.signin);

// Route privée avec JWT
router.use(checkUser);

router.post("/teams", teamsControllers.add);
router.put("/teams/:id", teamsControllers.edit);
router.delete("/teams/:id", teamsControllers.destroy);

router.post("/games", gamesControllers.add);
router.put("/games/:id", gamesControllers.edit);
router.delete("/games/:id", gamesControllers.destroy);

router.get("/profils", profilsControllers.browse);
router.get("/profils/:id", profilsControllers.read);
router.put("/profils/:id", profilsControllers.edit);

module.exports = router;
