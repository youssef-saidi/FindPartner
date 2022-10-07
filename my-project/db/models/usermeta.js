'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userMeta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users)

    }
  }
  userMeta.init({
    metaKey: DataTypes.STRING,
    metValue: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: { model: 'users', key: 'id' }
    },
  }, {
    sequelize,
    modelName: 'userMeta',
  });
  return userMeta;
};