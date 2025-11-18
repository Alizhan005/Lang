import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import User from './User.js';
import Achievement from './Achievement.js';

const UserAchievement = sequelize.define(
  'UserAchievement',
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
    achievementId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Achievement,
        key: 'id',
      },
      field: 'achievement_id',
    },
    earnedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'earned_at',
    },
  },
  {
    tableName: 'user_achievements',
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ['user_id', 'achievement_id'],
      },
    ],
  }
);

// Define associations
UserAchievement.belongsTo(User, { foreignKey: 'userId' });
UserAchievement.belongsTo(Achievement, { foreignKey: 'achievementId' });

export default UserAchievement;

