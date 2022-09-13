const UserController = require("../controllers/usersController");
const productController = require("../controllers/productController");

module.exports = function (app, validators) {
  app.get(
    "/products",
    productController.allProducts
  );

  app.post(
    "/user/email",
    validators.userProductValidator,
    productController.store
  );

  app.patch(
    "/product/edit/:id",
    validators.productValidator,
    productController.updateProduct
  );

   app.get(
    "/product/:id",
    productController.getProductById
  );

  

};
