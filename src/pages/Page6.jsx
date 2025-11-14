import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/Page6.css'

function Page6() {
  const [selectedWord, setSelectedWord] = useState(null)
  const [isRecording, setIsRecording] = useState(false)

  const words = [
    {
      id: 1,
      kazakh: 'Сәлем',
      english: 'Hello',
      phonetic: '/salem/',
      level: 'beginner'
    },
    {
      id: 2,
      kazakh: 'Рахмет',
      english: 'Thank you',
      phonetic: '/rakhmet/',
      level: 'beginner'
    },
    {
      id: 3,
      kazakh: 'Қалың қалай?',
      english: 'How are you?',
      phonetic: '/qalıñ qalay?/',
      level: 'beginner'
    },
    {
      id: 4,
      kazakh: 'Кешіріңіз',
      english: 'Excuse me',
      phonetic: '/keshiriñiz/',
      level: 'intermediate'
    },
    {
      id: 5,
      kazakh: 'Жақсы',
      english: 'Good',
      phonetic: '/zhaqsı/',
      level: 'beginner'
    },
    {
      id: 6,
      kazakh: 'Бешбармақ',
      english: 'National dish',
      phonetic: '/beshbarmaq/',
      level: 'advanced'
    }
  ]

  const handleWordSelect = (word) => {
    setSelectedWord(word)
    setIsRecording(false)
  }

  const handleStartRecording = () => {
    setIsRecording(true)
    // Here you would integrate with Web Speech API or similar
    console.log('Recording started for:', selectedWord)
  }

  const handleStopRecording = () => {
    setIsRecording(false)
    // Here you would stop recording and get feedback
    console.log('Recording stopped')
  }

  return (
    <div className="pronunciation-page" data-node-id="1:1181">
      <Navbar />
      <div className="pronunciation-content">
        <div className="pronunciation-header">
          <div className="pronunciation-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" fill="#AD46FF"/>
            </svg>
          </div>
          <div className="pronunciation-header-text">
            <h1>Pronunciation Practice</h1>
            <p>Improve your Kazakh pronunciation with AI feedback</p>
          </div>
        </div>

        <div className="pronunciation-main">
          <div className="words-list-card">
            <h2 className="words-list-title">Choose a Word</h2>
            <div className="words-list">
              {words.map(word => (
                <div
                  key={word.id}
                  className={`word-item ${selectedWord?.id === word.id ? 'selected' : ''}`}
                  onClick={() => handleWordSelect(word)}
                >
                  <div className="word-header">
                    <h3 className="word-kazakh">{word.kazakh}</h3>
                    <span className={`level-badge ${word.level}`}>{word.level}</span>
                  </div>
                  <p className="word-english">{word.english}</p>
                  <p className="word-phonetic">{word.phonetic}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="practice-area-card">
            {!selectedWord ? (
              <div className="practice-placeholder">
                <div className="placeholder-icon">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path d="M32 14c1.66 0 2.99-1.34 2.99-3L35 5c0-1.66-1.34-3-3-3s-3 1.34-3 3v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S22.7 14 22.7 11H20c0 3.41 2.72 6.23 6 6.72V28h2v-10.28c3.28-.48 6-3.3 6-6.72h-1.7z" fill="#9CA3AF"/>
                  </svg>
                </div>
                <h2 className="placeholder-title">Select a word to practice</h2>
                <p className="placeholder-text">Choose a word from the list to start practicing your pronunciation</p>
              </div>
            ) : (
              <div className="practice-active">
                <div className="practice-word-display">
                  <h2 className="practice-word-kazakh">{selectedWord.kazakh}</h2>
                  <p className="practice-word-english">{selectedWord.english}</p>
                  <p className="practice-word-phonetic">{selectedWord.phonetic}</p>
                </div>
                
                <div className="practice-controls">
                  {!isRecording ? (
                    <button className="record-button" onClick={handleStartRecording}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" fill="white"/>
                      </svg>
                      Start Recording
                    </button>
                  ) : (
                    <button className="stop-button" onClick={handleStopRecording}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="6" y="6" width="12" height="12" rx="2" fill="white"/>
                      </svg>
                      Stop Recording
                    </button>
                  )}
                </div>

                <div className="practice-feedback">
                  <p className="feedback-text">Click the button above to start recording your pronunciation</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page6
