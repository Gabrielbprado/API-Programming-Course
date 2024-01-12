'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {

   
    static associate(models) {
      Enrollment.belongsTo(models.People,
        {
          foreignKey: 'student_id'
        });
      Enrollment.belongsTo(models.Course,
        {
          foreignKey: 'course_id'
        });


    }
  }
  Enrollment.init({
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Enrollment',
    tableName : 'inscriptions'
  });
  return Enrollment;
};