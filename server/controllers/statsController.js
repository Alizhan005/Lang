import User from '../models/User.js';
import LessonProgress from '../models/LessonProgress.js';
import Vocabulary from '../models/Vocabulary.js';
import Achievement from '../models/Achievement.js';
import UserAchievement from '../models/UserAchievement.js';

// @desc    Get user statistics
// @route   GET /api/stats
// @access  Private
export const getStats = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] },
    });

    // Calculate streak days
    const streakDays = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      streakDays.push({
        day: date.getDate(),
        label: dayName,
        active: i <= user.streak - 1,
      });
    }

    // Get lessons completed
    const lessonsCompleted = await LessonProgress.count({
      where: {
        userId: req.user.id,
        completed: true,
      },
    });

    // Get vocabulary stats
    const totalWords = await Vocabulary.count({
      where: { userId: req.user.id },
    });
    const learnedWords = await Vocabulary.count({
      where: {
        userId: req.user.id,
        status: 'learned',
      },
    });

    // Get achievements count
    const achievementsCount = await UserAchievement.count({
      where: { userId: req.user.id },
    });

    // Calculate next level XP
    const currentLevelXP = (user.level - 1) * 250;
    const nextLevelXP = user.level * 250;
    const progressToNextLevel = ((user.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;

    res.json({
      level: user.level,
      xp: user.xp,
      nextLevelXP,
      progressToNextLevel: Math.min(100, Math.max(0, progressToNextLevel)),
      streak: user.streak,
      streakDays,
      lessonsCompleted,
      achievements: achievementsCount,
      totalWords,
      learnedWords,
      dailyXP: 150, // TODO: Calculate from daily activities
      dailyGoal: 200,
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get user achievements
// @route   GET /api/stats/achievements
// @access  Private
export const getAchievements = async (req, res) => {
  try {
    const allAchievements = await Achievement.findAll();
    const userAchievements = await UserAchievement.findAll({
      where: { userId: req.user.id },
    });

    const achievements = allAchievements.map((achievement) => {
      const userAchievement = userAchievements.find(
        (ua) => ua.achievementId === achievement.id
      );

      return {
        id: achievement.id,
        emoji: achievement.emoji,
        title: achievement.title,
        description: achievement.description,
        earned: !!userAchievement,
        date: userAchievement ? userAchievement.earnedAt : null,
        hint: !userAchievement ? 'Keep learning to unlock this achievement!' : null,
      };
    });

    res.json(achievements);
  } catch (error) {
    console.error('Get achievements error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
