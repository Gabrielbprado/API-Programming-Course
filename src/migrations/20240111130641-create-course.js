'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      StartDate: {
        type: Sequelize.DATEONLY
      },
      categories_id: {
        allowNull : false,
        type : Sequelize.INTEGER,
        references : {model : 'categories', Key : 'id'}
      },
      teacher_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references :{model : 'persons', Key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('courses');
  }
};