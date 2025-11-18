import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import User from './User.js';

const Vocabulary = sequelize.define(
  'Vocabulary',
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
    kazakh: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    english: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phonetic: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    example: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('learning', 'learned'),
      defaultValue: 'learning',
    },
    addedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'added_at',
    },
  },
  {
    tableName: 'vocabulary',
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['user_id', 'kazakh'],
      },
    ],
  }
);

// Define associations
Vocabulary.belongsTo(User, { foreignKey: 'userId' });

export default Vocabulary;
