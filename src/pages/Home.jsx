import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge">
            <div className="badge-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 0L9.797 5.527L16 6.11L12 10.138L12.944 16L8 13.527L3.056 16L4 10.138L0 6.11L6.203 5.527L8 0Z" fill="#1447E6"/>
              </svg>
            </div>
            <p className="badge-text">AI-Powered Language Learning</p>
          </div>
          
          <div className="hero-heading">
            <h1 className="heading-line-1">Master Kazakh with</h1>
            <h1 className="heading-line-2 gradient-text">AI-Powered</h1>
            <h1 className="heading-line-3">Learning</h1>
          </div>
          
          <div className="hero-description">
            <p>
              LangBridge is your personal AI tutor for learning Kazakh. Get real-time pronunciation feedback, interactive lessons, and personalized learning paths powered by advanced AI.
            </p>
          </div>
          
          <div className="hero-buttons">
            <Link to="/signup" className="btn btn-primary">
              Get Started Free
            </Link>
            <button className="btn btn-secondary">Learn More</button>
          </div>
          
          <div className="hero-social-proof">
            <div className="avatars">
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
            </div>
            <div className="social-proof-text">
              <div className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <p className="social-proof-label">Loved by 10,000+ learners</p>
            </div>
          </div>
        </div>
        
        <div className="hero-image-container">
          <div className="hero-image-blur"></div>
          <div className="hero-image">
            <div className="image-placeholder"></div>
          </div>
        </div>
      </section>

      {/* Other sections will be added from existing HTML */}
    </div>
  )
}

export default Home

