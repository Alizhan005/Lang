import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import User from './User.js';

const Chat = sequelize.define(
  'Chat',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
      field: 'user_id',
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isAI: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_ai',
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'chats',
    timestamps: true,
  }
);

// Define associations
Chat.belongsTo(User, { foreignKey: 'userId' });

export default Chat;
