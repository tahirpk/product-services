const { User, Product, UserProduct } = require('../models/index');
const {
    Op
} = require('sequelize');
const methods = require("../helpers/methods")

class productsLogic {}


/**
 * @param req
 * @param res
 * @returns {Promise<
 * 	all-product: {  }>}
 */

productsLogic.allProducts = async () => {

    return await Product.findAll()
    
}
/**
 * @param req
 * @param res
 * @returns {Promise<
 * 	user-product: {  user-email: *, product-id: *,}>}
 */
productsLogic.createUserProduct = async (req, res) => {
    let request = req.body
   
    let userData = await User.findOne({
		where: {
			email: request.email
		}
    })

    const storeUserData = {} 

    if (!userData) {
        storeUserData.name = request.email
        storeUserData.email = request.email
        storeUserData.image = "https://dummyimage.com/300/09f.png/fff",
        storeUserData.created_at = new Date()
        storeUserData.updated_at = new Date()
        userData = await User.create(storeUserData)
    }

   
    
    //product transaction
    const productUserData = await UserProduct.findOne({
		where: {
            product_id: request.product_id,
            user_id: userData.id
		}
	})

    const userProductData = {}  
    
    try {
        
        userProductData.user_id = userData.id
        userProductData.product_id = request.product_id
        userProductData.price = request.price  
        userProductData.created_at = new Date()
        userProductData.updated_at = new Date()
        if (productUserData) {                 
            await UserProduct.update(userProductData,{            
			where: {
				id: productUserData.id
			}
		})
        } else {
             await UserProduct.create(userProductData)
        }
       
        return {
            name: userData.name,
            email: userData.email,
        }
    } catch (error) {
        throw Error(error.message)
        // The transaction has already been rolled back automatically by Sequelize!
    }

   
}
//

productsLogic.getProductById = async (req, res) => {
    
    
    let productData = Product.findOne({
        where: {
            id: req.params.id
        }
    }) 
    
    return (productData)?productData:false
}

 productsLogic.updateProduct = async (req, res) => { 
     let request = req.body
     let id = req.params.id
     const productData = {}
     productData.name = request.name
     productData.price = request.price 
     
    let updated =  await Product.update(productData,{            
			where: {
				id: id
			}
    }) 
     
     let userProducts = await UserProduct.findAll({
		where: {
            product_id: id
		}
     })
     
     let usersToUpdate = []
     let priceDrop =''
     for (const userProduct of userProducts) {
         //drop price condition
        priceDrop =   userProduct.price - request.price
         if (priceDrop > 1) {
                usersToUpdate.push(userProduct.user_id)
            }
        
     }

     //to notify user email updates
     return productsLogic.fireEmail(usersToUpdate)
     
     //return usersToUpdate;
      
}
    
productsLogic.fireEmail = async (data) => {
    
   
    let userData, toMail = ''
    for (const id of data) {
         userData = await User.findOne({
            where: {
                id: id
             }
         })
        if( methods.notifyEmail(
                        "your subscription accepted",
                        "Product price ",
                        userData
        )) {
            toMail= true;
                    }
    }
       
    return toMail

}

module.exports = productsLogic
