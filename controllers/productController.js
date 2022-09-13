const methods = require("../helpers/methods")
const Controller = require("./controller");
const { productsLogic } = require("../logic");
class productController extends Controller {
    //
}
/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
productController.allProducts = async (req, res) => {

    let products = await productsLogic.allProducts()
        if (products) {
            return res.send({
                data: methods.successResponse(
                    "Products are ",
                    products
                    
                )
            })
    }
    
     res.send({ data: methods.failResponse("No product", 404) })
   
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
productController.store = async (req, res) => {

      try {
        let userProduct = await productsLogic.createUserProduct(req, res)
        if (userProduct) {
            return res.send({
                data: methods.successResponse(
                    "Product User created successfully",
                    200,
                    userProduct
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

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
productController.updateProduct = async (req, res) => {
    
      let product = await productsLogic.updateProduct(req, res)
        if (product) {
            return res.send({
                data: methods.successResponse(
                    "Product updated successfully",''
                    
                )
            })
        }
}


/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
productController.getProductById = async (req, res) => {
    
      let product = await productsLogic.getProductById(req, res)
        if (product) {
            return res.send({
                data: methods.successResponse(
                    "Product data ",
                    product
                    
                )
            })
    }
    
     res.send({ data: methods.failResponse("No product", 404) })
}

module.exports = productController;