import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import User from './User.js';
import Lesson from './Lesson.js';

const LessonProgress = sequelize.define(
  'LessonProgress',
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
    lessonId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Lesson,
        key: 'id',
      },
      field: 'lesson_id',
    },
    progress: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 100,
      },
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    completedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'completed_at',
    },
    startedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'started_at',
    },
  },
  {
    tableName: 'lesson_progress',
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['user_id', 'lesson_id'],
      },
    ],
  }
);

// Define associations
LessonProgress.belongsTo(User, { foreignKey: 'userId' });
LessonProgress.belongsTo(Lesson, { foreignKey: 'lessonId' });

export default LessonProgress;
