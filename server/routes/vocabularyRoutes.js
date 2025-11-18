import express from 'express';
import { body } from 'express-validator';
import {
  getVocabulary,
  addWord,
  updateWord,
  deleteWord,
  updateWordStatus,
} from '../controllers/vocabularyController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// All routes require authentication
router.use(protect);

const wordValidation = [
  body('kazakh')
    .trim()
    .notEmpty()
    .withMessage('Kazakh word is required'),
  body('english')
    .trim()
    .notEmpty()
    .withMessage('English translation is required'),
];

router.get('/', getVocabulary);
router.post('/', wordValidation, addWord);
router.put('/:id', wordValidation, updateWord);
router.delete('/:id', deleteWord);
router.put('/:id/status', updateWordStatus);

export default router;

