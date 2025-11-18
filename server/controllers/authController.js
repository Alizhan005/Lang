import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { validationResult } from 'express-validator';
import { Op } from 'sequelize';

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '7d',
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, password } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ where: { email: email.toLowerCase() } });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create user
    const user = await User.create({
      fullName,
      email: email.toLowerCase(),
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        fullName: user.fullName,
        email: user.email,
        level: user.level,
        xp: user.xp,
        token: generateToken(user.id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Check for user email
    const user = await User.findOne({ where: { email: email.toLowerCase() } });

    if (user && (await user.matchPassword(password))) {
      // Update last active date for streak calculation
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const lastActive = user.lastActiveDate ? new Date(user.lastActiveDate) : null;
      
      if (!lastActive || lastActive < today) {
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (!lastActive || lastActive.getTime() === yesterday.getTime()) {
          // Continue streak
          user.streak += 1;
        } else if (lastActive < yesterday) {
          // Streak broken
          user.streak = 1;
        }
        
        user.lastActiveDate = today;
        await user.save();
      }

      res.json({
        _id: user.id,
        fullName: user.fullName,
        email: user.email,
        level: user.level,
        xp: user.xp,
        streak: user.streak,
        token: generateToken(user.id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] },
    });
    res.json(user);
  } catch (error) {
    console.error('Get me error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
