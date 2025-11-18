import express from 'express';
import {
  sendMessage,
  getChatHistory,
  getChatStats,
} from '../controllers/tutorController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// All routes require authentication
router.use(protect);

router.post('/chat', sendMessage);
router.get('/history', getChatHistory);
router.get('/stats', getChatStats);

export default router;

