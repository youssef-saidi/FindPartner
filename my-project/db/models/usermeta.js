'use strict';

import connection from '../connection';

const {Model, DataTypes} = require('sequelize');
const userMeta = (sequelize, Types) => {
  class UserMeta extends Model {
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
  UserMeta.init({
    metaKey: Types.STRING,
    metValue: Types.STRING,
    userId: {
      type: Types.INTEGER,
      references: { model: 'users', key: 'id' }
    },
  }, {
    sequelize,
    modelName: 'UserMeta',
  });
  return UserMeta;
};

export default userMeta(connection,DataTypes)