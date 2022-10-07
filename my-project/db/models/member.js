'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  member.init({
    idUser: {     
      type: DataTypes.INTEGER,
      references: { model: 'users', key: 'id' }
    },
    idConv: {     
      type: DataTypes.INTEGER,
      references: { model: 'conversation', key: 'id' }
    },
  }, {
    sequelize,
    modelName: 'member',
  });
  return member;
};