import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import bcrypt from 'bcryptjs';

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name', // Маппинг на существующее поле 'name' в БД
      validate: {
        notEmpty: true,
        len: [2, 255],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password_hash', // Маппинг на существующее поле 'password_hash' в БД
      validate: {
        len: [8, 255],
      },
    },
    level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    xp: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    streak: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      field: 'day_streak', // Маппинг на существующее поле 'day_streak' в БД
    },
    lastActiveDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    lessonsCompleted: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    notificationsDailyReminder: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      field: 'notifications_daily_reminder',
    },
    notificationsWeeklyReport: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      field: 'notifications_weekly_report',
    },
    notificationsAchievementAlerts: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      field: 'notifications_achievement_alerts',
    },
  },
  {
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at', // Маппинг на существующее поле 'created_at'
    updatedAt: false, // Поле updatedAt может отсутствовать в старой структуре
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
      beforeUpdate: async (user) => {
        if (user.changed('password')) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  }
);

// Instance method to compare password
User.prototype.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Virtual for notifications object
User.prototype.getNotifications = function () {
  return {
    dailyReminder: this.notificationsDailyReminder,
    weeklyReport: this.notificationsWeeklyReport,
    achievementAlerts: this.notificationsAchievementAlerts,
  };
};

User.prototype.setNotifications = function (notifications) {
  if (notifications.dailyReminder !== undefined) {
    this.notificationsDailyReminder = notifications.dailyReminder;
  }
  if (notifications.weeklyReport !== undefined) {
    this.notificationsWeeklyReport = notifications.weeklyReport;
  }
  if (notifications.achievementAlerts !== undefined) {
    this.notificationsAchievementAlerts = notifications.achievementAlerts;
  }
};

export default User;
