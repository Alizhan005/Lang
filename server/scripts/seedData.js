import dotenv from 'dotenv';
import { sequelize } from '../config/database.js';
import Lesson from '../models/Lesson.js';
import Achievement from '../models/Achievement.js';

dotenv.config();

const lessons = [
  {
    title: 'Greetings & Basics',
    icon: '👋',
    level: 'beginner',
    description: 'Learn basic greetings and essential phrases',
    xpReward: 50,
    order: 1,
  },
  {
    title: 'Numbers & Counting',
    icon: '🔢',
    level: 'beginner',
    description: 'Master numbers and counting in Kazakh',
    xpReward: 50,
    order: 2,
  },
  {
    title: 'Food & Dining',
    icon: '🍽️',
    level: 'beginner',
    description: 'Essential vocabulary for food and dining',
    xpReward: 50,
    order: 3,
  },
  {
    title: 'Travel & Directions',
    icon: '✈️',
    level: 'intermediate',
    description: 'Navigate and travel in Kazakh',
    xpReward: 75,
    order: 4,
  },
  {
    title: 'Family & Relationships',
    icon: '👨‍👩‍👧‍👦',
    level: 'beginner',
    description: 'Talk about family and relationships',
    xpReward: 50,
    order: 5,
  },
  {
    title: 'Shopping & Markets',
    icon: '🛒',
    level: 'intermediate',
    description: 'Shopping vocabulary and phrases',
    xpReward: 75,
    order: 6,
  },
];

const achievements = [
  {
    title: 'First Steps',
    description: 'Completed your first lesson',
    emoji: '🎯',
    conditionType: 'lessons_completed',
    threshold: 1,
  },
  {
    title: 'Week Warrior',
    description: 'Maintained a 7-day streak',
    emoji: '🔥',
    conditionType: 'streak_days',
    threshold: 7,
  },
  {
    title: 'Conversationalist',
    description: 'Completed 10 chat sessions',
    emoji: '💬',
    conditionType: 'chat_sessions',
    threshold: 10,
  },
  {
    title: 'Speed Learner',
    description: 'Complete 5 lessons in one day',
    emoji: '⚡',
    conditionType: 'lessons_completed',
    threshold: 5,
  },
  {
    title: 'Polyglot',
    description: 'Learn 100 words',
    emoji: '📚',
    conditionType: 'words_learned',
    threshold: 100,
  },
];

const seedData = async () => {
  try {
    // Connect to database
    await sequelize.authenticate();
    console.log('Connected to MySQL');

    // Sync models
    await sequelize.sync({ force: false });
    console.log('Database models synchronized');

    // Clear existing data
    await Lesson.destroy({ where: {}, truncate: true });
    await Achievement.destroy({ where: {}, truncate: true });

    // Insert lessons
    const insertedLessons = await Lesson.bulkCreate(lessons);
    console.log(`Inserted ${insertedLessons.length} lessons`);

    // Insert achievements
    const insertedAchievements = await Achievement.bulkCreate(achievements);
    console.log(`Inserted ${insertedAchievements.length} achievements`);

    console.log('Data seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
