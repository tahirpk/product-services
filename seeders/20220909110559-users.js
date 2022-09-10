"use strict"

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        var dummyJSON = []
        for (var i = 0; i < 100; i++) {
            dummyJSON.push({
                name: "Dummy-" + i,
                email: "dummy-" + i + "@yopmail.com",
                image: "https://dummyimage.com/300/09f.png/fff",
                created_at: new Date(),
                updated_at: new Date()
            })
        }
        await queryInterface.bulkInsert("users", dummyJSON, {})
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
}
