import express from 'express';
import {
  getStats,
  getAchievements,
} from '../controllers/statsController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// All routes require authentication
router.use(protect);

router.get('/', getStats);
router.get('/achievements', getAchievements);

export default router;

