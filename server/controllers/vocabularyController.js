import Vocabulary from '../models/Vocabulary.js';
import { validationResult } from 'express-validator';
import { Op } from 'sequelize';

// @desc    Get user vocabulary
// @route   GET /api/vocabulary
// @access  Private
export const getVocabulary = async (req, res) => {
  try {
    const { status, search } = req.query;
    
    const where = { userId: req.user.id };
    
    if (status && status !== 'all') {
      where.status = status;
    }
    
    if (search) {
      where[Op.or] = [
        { kazakh: { [Op.like]: `%${search}%` } },
        { english: { [Op.like]: `%${search}%` } },
      ];
    }

    const vocabulary = await Vocabulary.findAll({
      where,
      order: [['createdAt', 'DESC']],
    });
    
    // Calculate stats
    const total = await Vocabulary.count({ where: { userId: req.user.id } });
    const learned = await Vocabulary.count({
      where: { userId: req.user.id, status: 'learned' },
    });
    const learning = await Vocabulary.count({
      where: { userId: req.user.id, status: 'learning' },
    });
    const mastery = total > 0 ? Math.round((learned / total) * 100) : 0;

    res.json({
      vocabulary,
      stats: {
        total,
        learned,
        learning,
        mastery,
      },
    });
  } catch (error) {
    console.error('Get vocabulary error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Add word to vocabulary
// @route   POST /api/vocabulary
// @access  Private
export const addWord = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { kazakh, english, phonetic, example } = req.body;

    // Check if word already exists for this user
    const existingWord = await Vocabulary.findOne({
      where: {
        userId: req.user.id,
        kazakh: kazakh.trim(),
      },
    });

    if (existingWord) {
      return res.status(400).json({ message: 'Word already exists in your vocabulary' });
    }

    const word = await Vocabulary.create({
      userId: req.user.id,
      kazakh: kazakh.trim(),
      english: english.trim(),
      phonetic,
      example,
    });

    res.status(201).json(word);
  } catch (error) {
    console.error('Add word error:', error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'Word already exists in your vocabulary' });
    }
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update word
// @route   PUT /api/vocabulary/:id
// @access  Private
export const updateWord = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { kazakh, english, phonetic, example } = req.body;

    const word = await Vocabulary.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });

    if (!word) {
      return res.status(404).json({ message: 'Word not found' });
    }

    if (kazakh) word.kazakh = kazakh;
    if (english) word.english = english;
    if (phonetic !== undefined) word.phonetic = phonetic;
    if (example !== undefined) word.example = example;

    await word.save();

    res.json(word);
  } catch (error) {
    console.error('Update word error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete word
// @route   DELETE /api/vocabulary/:id
// @access  Private
export const deleteWord = async (req, res) => {
  try {
    const word = await Vocabulary.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });

    if (!word) {
      return res.status(404).json({ message: 'Word not found' });
    }

    await word.destroy();

    res.json({ message: 'Word deleted successfully' });
  } catch (error) {
    console.error('Delete word error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update word status
// @route   PUT /api/vocabulary/:id/status
// @access  Private
export const updateWordStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!['learning', 'learned'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status. Must be "learning" or "learned"' });
    }

    const word = await Vocabulary.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });

    if (!word) {
      return res.status(404).json({ message: 'Word not found' });
    }

    word.status = status;
    await word.save();

    res.json(word);
  } catch (error) {
    console.error('Update word status error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
