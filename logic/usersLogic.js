const { User } = require('../models/index');
const {
    Op
} = require('sequelize');
const methods = require('../helpers/methods');

class usersLogic {}


/**
 * @param req
 * @param res
 * @returns {Promise<
 * 	user: {  email: *, name: *,}>}
 */
usersLogic.createUser = async (req, res) => {
    let request = req.body
    const userData = {}   
    try {
        
        userData.name = request.name
        userData.email = request.email
        userData.image = "https://dummyimage.com/300/09f.png/fff",
        userData.created_at = new Date()
        userData.updated_at = new Date()
        const user = await User.create(userData)
        return {
            name: user.name,
            email: user.email,
        }
    } catch (error) {
        throw Error(error.message)
        // The transaction has already been rolled back automatically by Sequelize!
    }
}


module.exports = usersLogic
