'use strict';
const {Model, DataTypes} = require('sequelize');

import connection from "../connection";

const users = (sequelize, Types) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    fullname: Types.STRING,
    password: Types.STRING,
    email: Types.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return User;
};

export default users(connection,DataTypes) 