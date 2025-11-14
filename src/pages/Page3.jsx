import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/Page3.css'

function Page3() {
  const lessons = [
    { id: 1, icon: '👋', title: 'Greetings & Basics', level: 'beginner', progress: 100 },
    { id: 2, icon: '🔢', title: 'Numbers & Counting', level: 'beginner', progress: 80 },
    { id: 3, icon: '🍽️', title: 'Food & Dining', level: 'beginner', progress: 60 },
    { id: 4, icon: '✈️', title: 'Travel & Directions', level: 'intermediate', progress: 40 }
  ]

  const achievements = [
    { id: 1, icon: '🎯', title: 'First Steps', description: 'Completed your first lesson', date: '01.11.2024' },
    { id: 2, icon: '🔥', title: 'Week Warrior', description: 'Maintained a 7-day streak', date: '07.11.2024' },
    { id: 3, icon: '💬', title: 'Conversationalist', description: 'Completed 10 chat sessions', date: '10.11.2024' }
  ]

  const streakDays = [
    { day: 8, label: 'Sat' },
    { day: 9, label: 'Sun' },
    { day: 10, label: 'Mon' },
    { day: 11, label: 'Tue' },
    { day: 12, label: 'Wed' },
    { day: 13, label: 'Thu' },
    { day: 14, label: 'Fri' }
  ]

  return (
    <div className="dashboard-page" data-node-id="1:441">
      <Navbar />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="dashboard-greeting">Сәлем, Alizhan ! 👋</h1>
          <p className="dashboard-subtitle">Ready to continue your Kazakh learning journey?</p>
        </div>

        <div className="dashboard-main">
          <div className="dashboard-left">
            {/* Progress Card */}
            <div className="dashboard-card progress-card">
              <div className="card-title">
                <svg className="card-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L12.09 7.26L18 8.27L14 12.14L14.91 18.02L10 15.77L5.09 18.02L6 12.14L2 8.27L7.91 7.26L10 2Z" fill="#0066CC"/>
                </svg>
                <h2>Your Progress</h2>
              </div>
              <div className="progress-content">
                <div className="progress-header">
                  <div className="level-info">
                    <div className="level-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 2L12.09 7.26L18 8.27L14 12.14L14.91 18.02L10 15.77L5.09 18.02L6 12.14L2 8.27L7.91 7.26L10 2Z" fill="#D4A574"/>
                      </svg>
                    </div>
                    <div>
                      <p className="level-label">Level 5</p>
                      <p className="level-xp">1250 XP</p>
                    </div>
                  </div>
                  <div className="next-level">
                    <p className="next-level-label">Next level</p>
                    <p className="next-level-xp">250 XP</p>
                  </div>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '50%' }}></div>
                  </div>
                  <p className="progress-text">50% to Level 6</p>
                </div>
                <div className="progress-stats">
                  <div className="stat-item">
                    <p className="stat-number">12</p>
                    <p className="stat-label">Lessons Completed</p>
                  </div>
                  <div className="stat-item">
                    <p className="stat-number">7</p>
                    <p className="stat-label">Day Streak</p>
                  </div>
                  <div className="stat-item">
                    <p className="stat-number">3</p>
                    <p className="stat-label">Achievements</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <div className="action-card">
                <div className="action-icon blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="#0066CC"/>
                    <path d="M7 7H17V9H7V7Z" fill="#0066CC"/>
                    <path d="M7 11H17V13H7V11Z" fill="#0066CC"/>
                    <path d="M7 15H12V17H7V15Z" fill="#0066CC"/>
                  </svg>
                </div>
                <div className="action-content">
                  <h3>Continue Learning</h3>
                  <p>Pick up where you left off</p>
                </div>
                <svg className="action-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="#4a5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="action-card">
                <div className="action-icon purple">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" fill="#AD46FF"/>
                    <path d="M7 9H17V11H7V9Z" fill="#AD46FF"/>
                    <path d="M7 13H14V15H7V13Z" fill="#AD46FF"/>
                  </svg>
                </div>
                <div className="action-content">
                  <h3>Chat with AI Tutor</h3>
                  <p>Get instant help</p>
                </div>
                <svg className="action-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="#4a5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Continue Learning Section */}
            <div className="dashboard-card lessons-card">
              <div className="card-header">
                <div className="card-title">
                  <svg className="card-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="#0066CC"/>
                  </svg>
                  <h2>Continue Learning</h2>
                </div>
                <button className="view-all-btn">View All</button>
              </div>
              <div className="lessons-grid">
                {lessons.map(lesson => (
                  <div key={lesson.id} className="lesson-card">
                    <div className="lesson-header">
                      <div className="lesson-icon">{lesson.icon}</div>
                      <div className="lesson-info">
                        <h3>{lesson.title}</h3>
                        <span className={`level-badge ${lesson.level}`}>{lesson.level}</span>
                      </div>
                      <svg className="lesson-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="#4a5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="lesson-progress">
                      <div className="lesson-progress-header">
                        <span>Progress</span>
                        <span>{lesson.progress}%</span>
                      </div>
                      <div className="lesson-progress-bar">
                        <div className="lesson-progress-fill" style={{ width: `${lesson.progress}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="dashboard-right">
            {/* Streak Card */}
            <div className="dashboard-card streak-card">
              <div className="card-title">
                <span className="streak-icon">🔥</span>
                <h2>7 Day Streak</h2>
              </div>
              <div className="streak-calendar">
                {streakDays.map((day, index) => (
                  <div key={index} className="streak-day">
                    <div className="streak-day-circle active">{day.day}</div>
                    <span className="streak-day-label">{day.label}</span>
                  </div>
                ))}
              </div>
              <p className="streak-message">🔥 Keep it up! You're on fire!</p>
            </div>

            {/* Achievements Card */}
            <div className="dashboard-card achievements-card">
              <div className="card-header">
                <div className="card-title">
                  <svg className="card-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L12.09 7.26L18 8.27L14 12.14L14.91 18.02L10 15.77L5.09 18.02L6 12.14L2 8.27L7.91 7.26L10 2Z" fill="#0066CC"/>
                  </svg>
                  <h2>Achievements</h2>
                </div>
                <button className="view-all-btn">View All</button>
              </div>
              <div className="achievements-list">
                {achievements.map(achievement => (
                  <div key={achievement.id} className="achievement-item">
                    <div className="achievement-icon">{achievement.icon}</div>
                    <div className="achievement-content">
                      <div className="achievement-header">
                        <h4>{achievement.title}</h4>
                        <span className="earned-badge">Earned</span>
                      </div>
                      <p className="achievement-description">{achievement.description}</p>
                      <p className="achievement-date">Earned on {achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Goal Card */}
            <div className="dashboard-card daily-goal-card">
              <h2 className="card-title-simple">Daily Goal</h2>
              <div className="daily-goal-content">
                <div className="daily-goal-header">
                  <span>Today's XP</span>
                  <span className="daily-xp">150 / 200 XP</span>
                </div>
                <div className="daily-goal-progress-bar">
                  <div className="daily-goal-progress-fill" style={{ width: '75%' }}></div>
                </div>
                <p className="daily-goal-message">Just 50 more XP to reach your daily goal! 🎯</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page3
