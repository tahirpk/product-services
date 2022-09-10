"use strict"
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Products", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.FLOAT
            },
            quantity: {
                type: Sequelize.INTEGER
            },
            email: {
                type: Sequelize.STRING
            },
            detail: {
                type: Sequelize.STRING
            },
            title: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Products")
    }
}
