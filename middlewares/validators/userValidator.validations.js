const { body, param } = require("express-validator");
const wrapperValidator = require("./wrapper.validator");

exports.userValidator = [
  body("email").exists()
        .withMessage("Email is required")
        .isLength({ min: 4 })
        .withMessage("Must be at least 4 chars long"),  
  wrapperValidator,
];
