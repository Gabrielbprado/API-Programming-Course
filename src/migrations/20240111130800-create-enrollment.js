'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inscriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      course_id: {
        allowNull : false,
        type : Sequelize.INTEGER,
        references : {model : 'courses', Key : 'id'}
      },
      student_id : {
        allowNull : false,
        type : Sequelize.INTEGER,
        references : { model: 'persons', Key : 'id'}       

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
    await queryInterface.dropTable('inscriptions');
  }
};