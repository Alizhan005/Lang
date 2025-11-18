import User from '../models/User.js';
import { validationResult } from 'express-validator';

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] },
    });
    
    // Add notifications object
    const userData = user.toJSON();
    userData.notifications = user.getNotifications();
    
    res.json(userData);
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateProfile = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email } = req.body;

    // Check if email is already taken by another user
    if (email && email.toLowerCase() !== req.user.email) {
      const emailExists = await User.findOne({ where: { email: email.toLowerCase() } });
      if (emailExists) {
        return res.status(400).json({ message: 'Email already in use' });
      }
    }

    const user = await User.findByPk(req.user.id);
    
    if (fullName) user.fullName = fullName;
    if (email) user.email = email.toLowerCase();
    
    await user.save();

    const userData = user.toJSON();
    delete userData.password;
    userData.notifications = user.getNotifications();

    res.json(userData);
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Change password
// @route   PUT /api/users/password
// @access  Private
export const changePassword = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { currentPassword, newPassword } = req.body;

    const user = await User.findByPk(req.user.id);

    // Check current password
    if (!(await user.matchPassword(currentPassword))) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    // Update password
    user.password = newPassword;
    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update notification settings
// @route   PUT /api/users/notifications
// @access  Private
export const updateNotifications = async (req, res) => {
  try {
    const { dailyReminder, weeklyReport, achievementAlerts } = req.body;

    const user = await User.findByPk(req.user.id);
    
    if (dailyReminder !== undefined) {
      user.notificationsDailyReminder = dailyReminder;
    }
    if (weeklyReport !== undefined) {
      user.notificationsWeeklyReport = weeklyReport;
    }
    if (achievementAlerts !== undefined) {
      user.notificationsAchievementAlerts = achievementAlerts;
    }
    
    await user.save();

    res.json(user.getNotifications());
  } catch (error) {
    console.error('Update notifications error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
