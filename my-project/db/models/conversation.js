
import connection from '../connection';

const {Model, DataTypes} = require('sequelize');
const conversation = (sequelize, Types) => {
  class Conversation extends Model {
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
  Conversation.init({
    id: {
      allowNull: false,
      type: Types.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    senderId: {     
      type: Types.INTEGER,
      foreignKey: true,
      references: { model: 'users', key: 'id' }
    },
    receiverId: {     
      type: Types.INTEGER,
      foreignKey: true,
      references: { model: 'users', key: 'id' }
    },

  }, {
    sequelize,
    modelName: "conversations",
  });
  return Conversation;
};

export default conversation(connection,DataTypes)