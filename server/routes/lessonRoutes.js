import express from 'express';
import {
  getLessons,
  getLesson,
  updateProgress,
} from '../controllers/lessonController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// All routes require authentication
router.use(protect);

router.get('/', getLessons);
router.get('/:id', getLesson);
router.put('/:id/progress', updateProgress);

export default router;

