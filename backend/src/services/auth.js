const bcrypt = require("bcryptjs");

const hashPassword = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 8)
    .then((hash) => {
      req.body.password = hash;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
};

module.exports = {
  hashPassword,
};
