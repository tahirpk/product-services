;("use strict")

module.exports = {
    async up(queryInterface, Sequelize) {
        var dummyJSON = []
        for (var i = 0; i < 100; i++) {
            dummyJSON.push({
                name: "Dummy-" + i,
                price: Math.random() + i,
                quantity: 10,
                detail: (Math.random() + 1).toString(36).substring(7),
                image: "https://dummyimage.com/300/09f.png/fff",
                created_at: new Date(),
                updated_at: new Date()
            })
        }
        await queryInterface.bulkInsert("products", dummyJSON, {})
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("products", null, {})
    }
}
