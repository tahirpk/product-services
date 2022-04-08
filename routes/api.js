const DimensionController = require("../controllers/dimension.controller");

module.exports = function (app, validators) {
  app.post(
    "/",
    validators.dimensionValidator,
    DimensionController.calculateDimension
  );
};
