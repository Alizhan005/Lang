import Lesson from '../models/Lesson.js';
import LessonProgress from '../models/LessonProgress.js';
import User from '../models/User.js';
import { Op } from 'sequelize';

// @desc    Get all lessons
// @route   GET /api/lessons
// @access  Private
export const getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.findAll({
      order: [['order', 'ASC'], ['createdAt', 'ASC']],
    });
    
    // Get user's progress for each lesson
    const lessonsWithProgress = await Promise.all(
      lessons.map(async (lesson) => {
        const progress = await LessonProgress.findOne({
          where: {
            userId: req.user.id,
            lessonId: lesson.id,
          },
        });

        return {
          ...lesson.toJSON(),
          progress: progress ? progress.progress : 0,
          completed: progress ? progress.completed : false,
        };
      })
    );

    res.json(lessonsWithProgress);
  } catch (error) {
    console.error('Get lessons error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get single lesson
// @route   GET /api/lessons/:id
// @access  Private
export const getLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findByPk(req.params.id);

    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }

    const progress = await LessonProgress.findOne({
      where: {
        userId: req.user.id,
        lessonId: lesson.id,
      },
    });

    res.json({
      ...lesson.toJSON(),
      progress: progress ? progress.progress : 0,
      completed: progress ? progress.completed : false,
    });
  } catch (error) {
    console.error('Get lesson error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update lesson progress
// @route   PUT /api/lessons/:id/progress
// @access  Private
export const updateProgress = async (req, res) => {
  try {
    const { progress, completed } = req.body;

    if (progress < 0 || progress > 100) {
      return res.status(400).json({ message: 'Progress must be between 0 and 100' });
    }

    const lesson = await Lesson.findByPk(req.params.id);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }

    let lessonProgress = await LessonProgress.findOne({
      where: {
        userId: req.user.id,
        lessonId: req.params.id,
      },
    });

    const wasCompleted = lessonProgress?.completed || false;

    if (!lessonProgress) {
      lessonProgress = await LessonProgress.create({
        userId: req.user.id,
        lessonId: parseInt(req.params.id),
        progress,
        completed: completed || false,
        ...(completed && { completedAt: new Date() }),
      });
    } else {
      lessonProgress.progress = progress;
      if (completed !== undefined) {
        lessonProgress.completed = completed;
        if (completed && !wasCompleted) {
          lessonProgress.completedAt = new Date();
          
          // Award XP
          const user = await User.findByPk(req.user.id);
          user.xp += lesson.xpReward || 50;
          user.lessonsCompleted += 1;
          
          // Calculate level (every 250 XP = 1 level)
          const newLevel = Math.floor(user.xp / 250) + 1;
          if (newLevel > user.level) {
            user.level = newLevel;
          }
          
          await user.save();
        }
      }
      await lessonProgress.save();
    }

    res.json(lessonProgress);
  } catch (error) {
    console.error('Update progress error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
