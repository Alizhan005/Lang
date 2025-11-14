import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/Page8.css'

const imgIcon = "http://localhost:3845/assets/9bddb7d3b5cfd4771d686fa89d8f6c6ee437a2e3.svg"
const imgIcon1 = "http://localhost:3845/assets/1b43e324cd17802232e6add444193e58ae760001.svg"
const imgIcon2 = "http://localhost:3845/assets/e910d8728f1b1058060504df1f8e4240cdddb57a.svg"
const imgIcon3 = "http://localhost:3845/assets/d0f41e0d1b0dc9c80a5c2f7243bf9d722388d76a.svg"
const imgIcon4 = "http://localhost:3845/assets/c365650e6333a792c6b69fb5a009bc35cf86e760.svg"
const imgIcon5 = "http://localhost:3845/assets/066e98ec28de90befcb224e099323904a95fb267.svg"
const imgIcon6 = "http://localhost:3845/assets/21b6fe4898bec5880c8c81293f6e7d997bff2ca7.svg"
const imgIcon7 = "http://localhost:3845/assets/4f3818e960b8f2115f2a2cdd5d9225d93853be9b.svg"
const imgIcon8 = "http://localhost:3845/assets/7a9638c0392e62ff498234de417330581982d19b.svg"
const imgIcon9 = "http://localhost:3845/assets/a84537afe74408026e009fe5a341991a6eb9bf6a.svg"
const imgIcon10 = "http://localhost:3845/assets/1b85aceb4219dc95d4bc7c31834ca8529b3a6736.svg"
const imgImageWithFallback = "http://localhost:3845/assets/137ab3c37f746b3f2653b2e6914611c16d267fc2.png"

function Page8() {
  const [notifications, setNotifications] = useState({
    dailyReminder: true,
    weeklyReport: true,
    achievementAlerts: true
  })

  const achievements = [
    {
      id: 1,
      emoji: '🎯',
      title: 'First Steps',
      description: 'Completed your first lesson',
      date: 'Earned on 01.11.2024',
      earned: true
    },
    {
      id: 2,
      emoji: '🔥',
      title: 'Week Warrior',
      description: 'Maintained a 7-day streak',
      date: 'Earned on 07.11.2024',
      earned: true
    },
    {
      id: 3,
      emoji: '💬',
      title: 'Conversationalist',
      description: 'Completed 10 chat sessions',
      date: 'Earned on 10.11.2024',
      earned: true
    },
    {
      id: 4,
      emoji: '🔒',
      title: 'Speed Learner',
      description: 'Complete 5 lessons in one day',
      hint: 'Keep learning to unlock this achievement!',
      earned: false
    },
    {
      id: 5,
      emoji: '🔒',
      title: 'Polyglot',
      description: 'Learn 100 words',
      hint: 'Keep learning to unlock this achievement!',
      earned: false
    }
  ]

  const toggleNotification = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleEdit = () => {
    console.log('Edit profile')
  }

  const handleChangePassword = () => {
    console.log('Change password')
  }

  const handleSignOut = () => {
    console.log('Sign out')
  }

  return (
    <div className="profile-page" data-node-id="1:1482">
      <Navbar />
      <div className="profile-content">
        <div className="profile-header">
          <div className="profile-icon">
            <img alt="" src={imgIcon} />
          </div>
          <div className="profile-header-text">
            <h1>Profile & Settings</h1>
            <p>Manage your account and preferences</p>
          </div>
        </div>

        <div className="profile-main">
          <div className="profile-left-column">
            {/* Profile Information Card */}
            <div className="card profile-info-card">
              <div className="card-title">
                <img alt="" className="card-title-icon" src={imgIcon1} />
                <p>Profile Information</p>
              </div>
              <div className="card-content">
                <div className="profile-avatar-section">
                  <div className="avatar-circle-large">
                    <span>A</span>
                  </div>
                  <div className="profile-name-section">
                    <h3>Alizhan</h3>
                    <p>alizhan695@gmail.coml</p>
                  </div>
                  <button className="edit-button" onClick={handleEdit}>Edit</button>
                </div>
                <div className="divider"></div>
                <div className="profile-fields">
                  <div className="profile-field">
                    <img alt="" className="field-icon" src={imgIcon2} />
                    <div className="field-content">
                      <p className="field-label">Email</p>
                      <p className="field-value">alizhan695@gmail.coml</p>
                    </div>
                  </div>
                  <div className="profile-field">
                    <img alt="" className="field-icon" src={imgIcon3} />
                    <div className="field-content">
                      <p className="field-label">Password</p>
                      <p className="field-value">••••••••</p>
                    </div>
                    <button className="change-button" onClick={handleChangePassword}>Change</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Settings Card */}
            <div className="card notification-card">
              <div className="card-title">
                <img alt="" className="card-title-icon" src={imgIcon4} />
                <p>Notification Settings</p>
              </div>
              <div className="card-content">
                <div className="notification-item">
                  <div className="notification-info">
                    <p className="notification-title">Daily Reminder</p>
                    <p className="notification-description">Get reminded to practice every day</p>
                  </div>
                  <button
                    className={`toggle-switch ${notifications.dailyReminder ? 'active' : ''}`}
                    onClick={() => toggleNotification('dailyReminder')}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>
                <div className="divider"></div>
                <div className="notification-item">
                  <div className="notification-info">
                    <p className="notification-title">Weekly Report</p>
                    <p className="notification-description">Receive your weekly progress report</p>
                  </div>
                  <button
                    className={`toggle-switch ${notifications.weeklyReport ? 'active' : ''}`}
                    onClick={() => toggleNotification('weeklyReport')}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>
                <div className="divider"></div>
                <div className="notification-item">
                  <div className="notification-info">
                    <p className="notification-title">Achievement Alerts</p>
                    <p className="notification-description">Get notified when you earn achievements</p>
                  </div>
                  <button
                    className={`toggle-switch ${notifications.achievementAlerts ? 'active' : ''}`}
                    onClick={() => toggleNotification('achievementAlerts')}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>
              </div>
            </div>

            {/* Achievements Card */}
            <div className="card achievements-card">
              <div className="card-title">
                <img alt="" className="card-title-icon" src={imgIcon5} />
                <p>Achievements (3 earned)</p>
              </div>
              <div className="card-content achievements-content">
                {achievements.map(achievement => (
                  <div
                    key={achievement.id}
                    className={`achievement-item ${!achievement.earned ? 'locked' : ''}`}
                  >
                    <div className={`achievement-icon ${!achievement.earned ? 'locked-icon' : ''}`}>
                      <span>{achievement.emoji}</span>
                    </div>
                    <div className="achievement-details">
                      <div className="achievement-header">
                        <h4>{achievement.title}</h4>
                        {achievement.earned && (
                          <span className="earned-badge">Earned</span>
                        )}
                      </div>
                      <p className="achievement-description">{achievement.description}</p>
                      {achievement.earned ? (
                        <p className="achievement-date">{achievement.date}</p>
                      ) : (
                        <p className="achievement-hint">{achievement.hint}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Danger Zone Card */}
            <div className="card danger-zone-card">
              <div className="card-title danger-title">
                <p>Danger Zone</p>
              </div>
              <div className="danger-zone-content">
                <div className="danger-zone-info">
                  <p className="danger-zone-title">Sign Out</p>
                  <p className="danger-zone-description">Sign out of your account</p>
                </div>
                <button className="sign-out-button" onClick={handleSignOut}>Sign Out</button>
              </div>
            </div>
          </div>

          <div className="profile-right-column">
            {/* Progress Card */}
            <div className="card progress-card">
              <div className="card-title">
                <img alt="" className="card-title-icon" src={imgIcon6} />
                <p>Progress</p>
              </div>
              <div className="card-content progress-content">
                <div className="progress-header">
                  <div className="level-info">
                    <div className="level-icon">
                      <img alt="" src={imgIcon7} />
                    </div>
                    <div className="level-text">
                      <p className="level-label">Level 5</p>
                      <p className="level-xp">1250 XP</p>
                    </div>
                  </div>
                  <div className="next-level-info">
                    <p className="next-level-label">Next level</p>
                    <p className="next-level-xp">250 XP</p>
                  </div>
                </div>
                <div className="progress-bar-section">
                  <div className="progress-bar-container">
                    <div className="progress-bar-fill" style={{ width: '50%' }}></div>
                  </div>
                  <p className="progress-text">50% to Level 6</p>
                </div>
              </div>
            </div>

            {/* Statistics Card */}
            <div className="card statistics-card">
              <div className="card-title">
                <p>Statistics</p>
              </div>
              <div className="card-content statistics-content">
                <div className="stat-item">
                  <div className="stat-icon stat-icon-blue">
                    <img alt="" src={imgIcon8} />
                  </div>
                  <div className="stat-info">
                    <p className="stat-label">Lessons Completed</p>
                    <p className="stat-value">12</p>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="stat-item">
                  <div className="stat-icon stat-icon-orange">
                    <img alt="" src={imgIcon9} />
                  </div>
                  <div className="stat-info">
                    <p className="stat-label">Current Streak</p>
                    <p className="stat-value">7 days</p>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="stat-item">
                  <div className="stat-icon stat-icon-purple">
                    <img alt="" src={imgIcon10} />
                  </div>
                  <div className="stat-info">
                    <p className="stat-label">Total XP</p>
                    <p className="stat-value">1250 XP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Journey Card */}
            <div className="card journey-card">
              <div className="card-title journey-title">
                <p>Your Journey</p>
              </div>
              <div className="card-content journey-content">
                <div className="journey-image">
                  <img alt="" src={imgImageWithFallback} />
                </div>
                <p className="journey-text">
                  You've been learning for <span className="journey-days">379 days</span>
                </p>
                <p className="journey-message">
                  Keep up the great work! You're making excellent progress in your Kazakh learning journey. 🎉
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page8
