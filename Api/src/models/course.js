'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
   
    static associate(models) {
      Course.belongsTo(models.People,
        {
          foreignKey: 'teacher_id'
        });
      Course.belongsTo(models.Category,
        {
          foreignKey : 'categories_id'
        });
      Course.hasMany(models.Enrolled,
        {
          foreignKey: 'course_id'
        });
    }
  }
  Course.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    startDate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses',
    paranoid: true,
  });
  return Course;
};