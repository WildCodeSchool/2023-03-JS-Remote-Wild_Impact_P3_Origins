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

const checkUserData = (req, res, next) => {
  const { error } = authSchema("required").validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    console.error(error);
    res.status(400).json({ msg: "Invalid email or password" });
  } else {
    next();
  }
};

module.exports = {
  checkUserData,
};
