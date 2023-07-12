const joi = require("joi");

const authSchema = () => {
  return joi.object({
    email: joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com"] },
    }),

    password: joi
      .string()
      .min(6)
      .max(30)
      .pattern(/^[a-zA-Z0-9]+$/)
      .required(),
  });
};
const updateSchema = () => {
  return joi.object({
    email: joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com"] },
    }),

    firstname: joi.string().alphanum(),
    lastname: joi.string().alphanum(),
    src: joi.string(),
    id: joi.number().integer(),
  });
};

const gamesSchema = () => {
  return joi.object({
    id: joi.number(),
    label: joi.string().alphanum(),
    acronyme: joi.string().alphanum(),
    src: joi.string(),
    alt: joi.string(),
    logo: joi.string(),
  });
};

const checkUserData = (req, res, next) => {
  const { error } = authSchema("required").validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    console.error(error.details[0]);

    if (error.details[0].type === "string.min") {
      res.status(400).json({
        msg: "Le mot de passe doit contenir entre 6 et 30 caractères, uniquement en minuscule, majuscule ou nombres.",
      });
    } else if (error.details[0].type === "string.email") {
      res.status(400).json({ msg: "L'email est invalide" });
    } else {
      res.status(400).json({ msg: "Invalid email or password" });
    }
  } else {
    next();
  }
};

const checkUpdateData = (req, res, next) => {
  const { error } = updateSchema("required").validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    console.error(error.details[0]);

    if (error.details[0].type === "string.email") {
      res.status(400).json({ msg: "L'email est invalide" });
    }
  } else {
    next();
  }
};

const checkGameData = (req, res, next) => {
  const { error } = gamesSchema("required").validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    console.error(error.details[0]);
    if (error.details[0].type === "string.alphanum") {
      res.status(400).json({ msg: "caractère alphanumérique uniquement" });
    }
  } else {
    next();
  }
};

module.exports = {
  checkUserData,
  checkUpdateData,
  checkGameData,
};
