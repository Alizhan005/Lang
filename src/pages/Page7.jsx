import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/Page7.css'

function Page7() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  const vocabulary = [
    {
      id: 1,
      kazakh: 'Сәлем',
      english: 'Hello',
      phonetic: '/salem/',
      example: 'Сәлем, қалың қалай? (Hello, how are you?)',
      status: 'learned'
    },
    {
      id: 2,
      kazakh: 'Рахмет',
      english: 'Thank you',
      phonetic: '/rakhmet/',
      example: 'Көмегіңіз үшін рахмет (Thank you for your help)',
      status: 'learned'
    },
    {
      id: 3,
      kazakh: 'Кешіріңіз',
      english: 'Excuse me / Sorry',
      phonetic: '/keshiriñiz/',
      example: 'Кешіріңіз, қайда? (Excuse me, where?)',
      status: 'learning'
    }
  ]

  const stats = {
    total: vocabulary.length,
    learned: vocabulary.filter(w => w.status === 'learned').length,
    learning: vocabulary.filter(w => w.status === 'learning').length,
    mastery: Math.round((vocabulary.filter(w => w.status === 'learned').length / vocabulary.length) * 100)
  }

  const filteredVocabulary = vocabulary.filter(word => {
    const matchesSearch = word.kazakh.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         word.english.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = activeFilter === 'all' || word.status === activeFilter
    return matchesSearch && matchesFilter
  })

  const handleAddWord = () => {
    console.log('Add word clicked')
    // Add word functionality
  }

  const toggleWordStatus = (wordId) => {
    console.log('Toggle status for word:', wordId)
    // Toggle word status functionality
  }

  return (
    <div className="vocabulary-page" data-node-id="1:1313">
      <Navbar />
      <div className="vocabulary-content">
        <div className="vocabulary-header">
          <div className="vocabulary-header-left">
            <div className="vocabulary-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#00A63E"/>
              </svg>
            </div>
            <div className="vocabulary-header-text">
              <h1>Personal Vocabulary</h1>
              <p>Build and review your Kazakh vocabulary</p>
            </div>
          </div>
          <button className="add-word-button" onClick={handleAddWord}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2C8.55228 2 9 2.44772 9 3V7H13C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9H9V13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13V9H3C2.44772 9 2 8.55228 2 8C2 7.44772 2.44772 7 3 7H7V3C7 2.44772 7.44772 2 8 2Z" fill="white"/>
            </svg>
            Add Word
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <p className="stat-number">{stats.total}</p>
            <p className="stat-label">Total Words</p>
          </div>
          <div className="stat-card stat-learned">
            <p className="stat-number stat-number-green">{stats.learned}</p>
            <p className="stat-label">Learned</p>
          </div>
          <div className="stat-card stat-learning">
            <p className="stat-number stat-number-blue">{stats.learning}</p>
            <p className="stat-label">Learning</p>
          </div>
          <div className="stat-card stat-mastery">
            <p className="stat-number stat-number-purple">{stats.mastery}%</p>
            <p className="stat-label">Mastery</p>
          </div>
        </div>

        <div className="search-container">
          <div className="search-input-wrapper">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="#64748B"/>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search vocabulary..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="vocabulary-filters">
          <div className="filter-tabs">
            <button
              className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Words
              <span className="filter-badge">{vocabulary.length}</span>
            </button>
            <button
              className={`filter-tab ${activeFilter === 'learning' ? 'active' : ''}`}
              onClick={() => setActiveFilter('learning')}
            >
              Learning
              <span className="filter-badge filter-badge-blue">{stats.learning}</span>
            </button>
            <button
              className={`filter-tab ${activeFilter === 'learned' ? 'active' : ''}`}
              onClick={() => setActiveFilter('learned')}
            >
              Learned
              <span className="filter-badge filter-badge-green">{stats.learned}</span>
            </button>
          </div>
        </div>

        <div className="vocabulary-list">
          {filteredVocabulary.map(word => (
            <div key={word.id} className="vocabulary-card">
              <div className="vocabulary-item-content">
                <div className="vocabulary-word-info">
                  <h3 className="vocabulary-word-kazakh">{word.kazakh}</h3>
                  <p className="vocabulary-word-english">{word.english}</p>
                  <p className="vocabulary-word-phonetic">{word.phonetic}</p>
                </div>
                <div className="vocabulary-example">
                  <p>{word.example}</p>
                </div>
              </div>
              <div className="vocabulary-item-actions">
                {word.status === 'learned' ? (
                  <>
                    <button className="status-button learned-button" onClick={() => toggleWordStatus(word.id)}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.5 4L6 11.5L2.5 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <div className="status-badge learned-badge">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M10 3L4.5 8.5L2 6" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Learned
                    </div>
                  </>
                ) : (
                  <button className="status-button learning-button" onClick={() => toggleWordStatus(word.id)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2C8.55228 2 9 2.44772 9 3V7H13C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9H9V13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13V9H3C2.44772 9 2 8.55228 2 8C2 7.44772 2.44772 7 3 7H7V3C7 2.44772 7.44772 2 8 2Z" stroke="#0066CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page7
