import connection from '../connection';
import { Model, DataTypes } from 'sequelize';

const initUser = (sequelize, Types) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  
  users.init({
    fullname: Types.STRING,
    fakename: Types.STRING,
    password: Types.STRING,
    email: Types.STRING,
    status: Types.BOOLEAN
  }, {
    sequelize,
    modelName: 'users',
  });

  return users;

};
export default initUser(connection,DataTypes)
