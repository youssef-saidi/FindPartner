
import connection from '../connection';

const {Model, DataTypes} = require('sequelize');

const messages = (sequelize, Types) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Message.init({
    text: Types.STRING,
    sender: {     
      type: Types.INTEGER,
      references: { model: 'users', key: 'id' }
    },
    idConv: {     
      type: Types.INTEGER,
      references: { model: 'conversations', key: 'id' }
    },
    etat: Types.BOOLEAN,

  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};
export default messages(connection,DataTypes)