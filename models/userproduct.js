"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class UserProduct extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    UserProduct.init(
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false
            },
            user_id: DataTypes.INTEGER,
            product_id: DataTypes.INTEGER,
            price: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
        },
        {
            sequelize,
            modelName: "UserProduct",
            sequelize: sequelize,
            underscored: true,
            tableName: "user_product",
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    )
    return UserProduct
}
