import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/Page5.css'

function Page5() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Сәлем! I'm your AI Kazakh tutor. How can I help you today?",
      time: '10:00',
      isAI: true
    }
  ])

  const suggestedQuestions = [
    'How do I say "good morning" in Kazakh?',
    'Explain vowel harmony in Kazakh',
    'What are common Kazakh greetings?',
    'How do I conjugate verbs in present tense?'
  ]

  const quickTips = [
    {
      icon: '💡',
      text: 'I can help with grammar, vocabulary, pronunciation, and cultural context',
      color: 'blue'
    },
    {
      icon: '🎯',
      text: 'Ask specific questions for better answers',
      color: 'purple'
    },
    {
      icon: '✨',
      text: 'I can provide examples and practice exercises',
      color: 'green'
    }
  ]

  const handleSend = () => {
    if (!message.trim()) return
    
    const newMessage = {
      id: messages.length + 1,
      text: message,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      isAI: false
    }
    
    setMessages([...messages, newMessage])
    setMessage('')
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: 'I understand your question. Let me help you with that!',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        isAI: true
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  const handleSuggestedQuestion = (question) => {
    setMessage(question)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="tutor-page" data-node-id="1:1041">
      <Navbar />
      <div className="tutor-content">
        <div className="tutor-header">
          <div className="tutor-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="#AD46FF"/>
            </svg>
          </div>
          <div className="tutor-header-text">
            <h1>AI Tutor</h1>
            <p>Ask me anything about Kazakh language and culture</p>
          </div>
        </div>

        <div className="tutor-main">
          <div className="tutor-chat-container">
            <div className="tutor-chat-card">
              <div className="chat-header">
                <svg className="chat-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="#AD46FF"/>
                </svg>
                <h2>Chat with AI Tutor</h2>
              </div>
              
              <div className="chat-messages">
                {messages.map(msg => (
                  <div key={msg.id} className={`chat-message ${msg.isAI ? 'ai-message' : 'user-message'}`}>
                    {msg.isAI && (
                      <div className="message-avatar">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#AD46FF"/>
                        </svg>
                      </div>
                    )}
                    <div className="message-content">
                      <p className="message-text">{msg.text}</p>
                      <p className="message-time">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="chat-input-container">
                <div className="chat-input-wrapper">
                  <textarea
                    className="chat-input"
                    placeholder="Ask a question about Kazakh..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    rows={3}
                  />
                  <button 
                    className="send-button"
                    onClick={handleSend}
                    disabled={!message.trim()}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M1.4 1.4L14.6 8L1.4 14.6L3 8L1.4 1.4Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <p className="chat-hint">Press Enter to send, Shift+Enter for new line</p>
              </div>
            </div>
          </div>

          <div className="tutor-sidebar">
            <div className="sidebar-card">
              <h3 className="sidebar-title">Quick Tips</h3>
              <div className="tips-list">
                {quickTips.map((tip, index) => (
                  <div key={index} className={`tip-item tip-${tip.color}`}>
                    <p>{tip.icon} {tip.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-card">
              <h3 className="sidebar-title">Suggested Questions</h3>
              <div className="suggested-questions">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="suggested-question-btn"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            <div className="sidebar-card stats-card">
              <h3 className="sidebar-title stats-title">Your Stats</h3>
              <div className="stats-content">
                <div className="stat-row">
                  <span className="stat-label">Questions Asked</span>
                  <span className="stat-value">0</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Topics Covered</span>
                  <span className="stat-value">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page5
