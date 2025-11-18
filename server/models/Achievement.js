import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Achievement = sequelize.define(
  'Achievement',
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    emoji: {
      type: DataTypes.STRING,
      defaultValue: '🏆',
    },
    conditionType: {
      type: DataTypes.ENUM('lessons_completed', 'streak_days', 'words_learned', 'chat_sessions', 'xp_reached'),
      allowNull: false,
      field: 'condition_type',
    },
    threshold: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'achievements',
    timestamps: true,
  }
);

export default Achievement;
