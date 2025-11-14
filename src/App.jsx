import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Page7 from './pages/Page7'
import Page8 from './pages/Page8'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
      <Route path="/page5" element={<Page5 />} />
      <Route path="/page6" element={<Page6 />} />
      <Route path="/page7" element={<Page7 />} />
      <Route path="/page8" element={<Page8 />} />
    </Routes>
  )
}

export default App

