'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrolled extends Model {
   
    static associate(models) {
      Enrolled.belongsTo(models.People,
        {
          foreignKey : 'student_id' 
        });
      Enrolled.belongsTo(models.Course,
        {
          foreignKey : 'course_id'
        });
    }
  }
  Enrolled.init({
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Enrolled',
    tableName : 'matriculated'
  });
  return Enrolled;
};