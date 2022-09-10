const userValidator = require("./userValidator.validations");
const userProductValidator = require("./userProductValidator.validations");
const productValidator = require("./productValidator.validations");

module.exports = {
  ...userValidator,
  ...userProductValidator,
  ...productValidator,
};
