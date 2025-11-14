import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="navbar" data-node-id="1:731">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-icon">🌉</span>
          <span className="navbar-logo-text">LangBridge</span>
        </Link>
        
        <div className="navbar-links">
          <Link to="/page3" className={`navbar-link ${isActive('/page3') ? 'active' : ''}`}>
            <svg className="navbar-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2H7V7H2V2Z" fill="currentColor"/>
              <path d="M9 2H14V7H9V2Z" fill="currentColor"/>
              <path d="M2 9H7V14H2V9Z" fill="currentColor"/>
              <path d="M9 9H14V14H9V9Z" fill="currentColor"/>
            </svg>
            Dashboard
          </Link>
          <Link to="/lessons" className={`navbar-link ${isActive('/lessons') ? 'active' : ''}`}>
            <svg className="navbar-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 3H14V13H2V3ZM3 4V12H13V4H3Z" fill="currentColor"/>
              <path d="M4 6H12V7H4V6Z" fill="currentColor"/>
            </svg>
            Lessons
          </Link>
          <Link to="/page5" className={`navbar-link ${isActive('/page5') ? 'active' : ''}`}>
            <svg className="navbar-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2ZM8 9C6.34 9 5 7.66 5 6C5 4.34 6.34 3 8 3C9.66 3 11 4.34 11 6C11 7.66 9.66 9 8 9Z" fill="currentColor"/>
              <path d="M2 13C2 11.34 5.33 10 8 10C10.67 10 14 11.34 14 13V14H2V13Z" fill="currentColor"/>
            </svg>
            AI Tutor
          </Link>
          <Link to="/page6" className={`navbar-link ${isActive('/page6') ? 'active' : ''}`}>
            <svg className="navbar-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 0C7.45 0 7 0.45 7 1V5C7 5.55 7.45 6 8 6C8.55 6 9 5.55 9 5V1C9 0.45 8.55 0 8 0Z" fill="currentColor"/>
              <path d="M4 5V7C4 9.76 6.24 12 9 12C11.76 12 14 9.76 14 7V5H13V7C13 9.21 11.21 11 9 11C6.79 11 5 9.21 5 7V5H4Z" fill="currentColor"/>
              <path d="M9 13V16H7V13H9Z" fill="currentColor"/>
            </svg>
            Pronunciation
          </Link>
          <Link to="/page7" className={`navbar-link ${isActive('/page7') ? 'active' : ''}`}>
            <svg className="navbar-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 3H14V13H2V3ZM3 4V12H13V4H3Z" fill="currentColor"/>
            </svg>
            Vocabulary
          </Link>
        </div>
        
        <div className="navbar-avatar">
          <div className="avatar-circle">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2ZM8 9C6.34 9 5 7.66 5 6C5 4.34 6.34 3 8 3C9.66 3 11 4.34 11 6C11 7.66 9.66 9 8 9Z" fill="white"/>
              <path d="M2 13C2 11.34 5.33 10 8 10C10.67 10 14 11.34 14 13V14H2V13Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

