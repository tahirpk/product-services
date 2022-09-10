const { body, param } = require("express-validator");
const wrapperValidator = require("./wrapper.validator");

exports.productValidator = [
  body("name").exists().withMessage("Name is required"), 
  body("price").exists().withMessage("Price is required"), 
  param("id").exists().withMessage("Product id is required"), 
  wrapperValidator,
];
