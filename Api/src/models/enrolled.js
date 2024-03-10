'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrolled extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Enrolled.belongsTo(models.People,
        {
          foreignKey : 'student_id', 
          as: 'ClasSsubscribed'
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
    tableName: 'matriculated'
  });
  return Enrolled;
};