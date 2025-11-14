import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Signup.css'

function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    
    // Trim whitespace from passwords
    const password = formData.password.trim()
    const confirmPassword = formData.confirmPassword.trim()
    
    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }
    
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setErrors({})
    console.log('Form submitted:', formData)
    // Redirect to dashboard after successful registration
    navigate('/page3')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-header">
          <div className="signup-logo-section">
            <div className="signup-logo">
              <span className="logo-emoji">🌉</span>
            </div>
            <h1 className="signup-brand-name">LangBridge</h1>
          </div>
          <p className="signup-tagline">Start your Kazakh learning journey today!</p>
        </div>

        <div className="signup-card">
          <div className="signup-card-header">
            <h2 className="signup-card-title">Create Account</h2>
            <p className="signup-card-description">Sign up to start learning Kazakh with AI</p>
          </div>

          <div className="signup-card-content">
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className={`form-input ${errors.password ? 'error' : ''}`}
                  name="password"
                  placeholder="Create a strong password (min 8 characters)"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <div className="form-field">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>

              <button type="submit" className="btn-signup">Create Account</button>
            </form>

            <div className="signup-footer-links">
              <span className="signup-footer-text">Already have an account?</span>
              <Link to="/signin" className="signup-link">Sign in</Link>
            </div>

            <div className="back-to-home">
              <Link to="/" className="back-link">← Back to home</Link>
            </div>

            <p className="signup-terms">
              By creating an account, you agree to our{' '}
              <a href="#" className="terms-link">Terms of Service</a> and{' '}
              <a href="#" className="terms-link">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup

