const { body, param } = require("express-validator");
const wrapperValidator = require("./wrapper.validator");

exports.userProductValidator = [
  body("email").exists().withMessage("Email is required"), 
  body("product_id").exists().withMessage("Product id is required"), 
  wrapperValidator,
];
