const UserController = require("../controllers/usersController");
const productController = require("../controllers/productController");

module.exports = function (app, validators) {
  app.get(
    "/products",
    productController.allProducts
  );

  app.post(
    "/email",
    validators.userProductValidator,
    productController.store
  );

  app.patch(
    "/product/edit/:id",
    validators.productValidator,
    productController.updateProduct
  );

  

};
