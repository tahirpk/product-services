const methods = require("../helpers/methods");

/**
 *
 * @param {*} req
 * @param {*} res
 */
exports.calculateDimension = async (req, res) => {
  res.send(
    methods.successResponse("Package Items Dimensions W X H X L.", {
      data: {
        Width: methods.RandomNumber(10, 1),
        Height: methods.RandomNumber(10, 1),
        Length: methods.RandomNumber(10, 1),
      },
    })
  );
};
