const { body, param } = require("express-validator");
const wrapperValidator = require("./wrapper.validator");

exports.dimensionValidator = [
  body("items").exists().withMessage("missing"),
  body("items.*.width").exists().notEmpty().withMessage("Width is required"),
  body("items.*.length").exists().notEmpty().withMessage("Length is required"),
  body("items.*.height").exists().notEmpty().withMessage("Height is required"),
  wrapperValidator,
];
