import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Lesson = sequelize.define(
  'Lesson',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING,
      defaultValue: '📚',
    },
    level: {
      type: DataTypes.ENUM('beginner', 'intermediate', 'advanced'),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    content: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    xpReward: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
      field: 'xp_reward',
    },
    order: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    tableName: 'lessons',
    timestamps: true,
  }
);

export default Lesson;
