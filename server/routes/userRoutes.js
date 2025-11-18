import express from 'express';
import { body } from 'express-validator';
import {
  getProfile,
  updateProfile,
  changePassword,
  updateNotifications,
} from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// All routes require authentication
router.use(protect);

const updateProfileValidation = [
  body('fullName')
    .optional()
    .trim()
    .isLength({ min: 2 })
    .withMessage('Full name must be at least 2 characters'),
  body('email')
    .optional()
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email'),
];

const changePasswordValidation = [
  body('currentPassword')
    .notEmpty()
    .withMessage('Current password is required'),
  body('newPassword')
    .isLength({ min: 8 })
    .withMessage('New password must be at least 8 characters'),
];

router.get('/profile', getProfile);
router.put('/profile', updateProfileValidation, updateProfile);
router.put('/password', changePasswordValidation, changePassword);
router.put('/notifications', updateNotifications);

export default router;

