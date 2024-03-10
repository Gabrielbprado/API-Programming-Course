'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
   
    static associate(models) {
      People.hasMany(models.Enrolled,
        {
          foreignKey : 'student_id',
          as: 'ClasSsubscribed'
        });
      People.hasMany(models.Course,
        {
          foreignKey : 'teacher_id'
        });
    }
  }
  People.init({
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'People',
    tableName: 'persons'
  });
  return People;
};