const methods = require("../helpers/methods")
const Controller = require("./controller");
const { usersLogic } = require("../logic");
class usersController extends Controller {
    //
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
usersController.store = async (req, res) => {

      try {
        let user = await usersLogic.createUser(req, res)
        if (user) {
            return res.send({
                data: methods.successResponse(
                    "User created successfully",
                    200,
                    user
                )
            })
        }
    } catch (error) {
        res.statusCode =
            res.statusCode >= 400 && res.statusCode < 600
                ? res.statusCode
                : 500
        res.send({ data: methods.failResponse(error.message, res.statusCode) })
    }
}
module.exports = usersController;