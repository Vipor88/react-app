'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('golfclubs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modelPic: {
        type: Sequelize.STRING
      },
      stripeId: {
        type: Sequelize.STRING
      },
      modelName: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      productHighlights: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('golfclubs');
  }
};