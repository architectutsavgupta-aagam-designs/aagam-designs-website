import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import useImageProtection from './hooks/useImageProtection'

function App() {
  // Activates all image protection globally (right-click block,
  // drag block, DevTools shortcut deterrent)
  useImageProtection()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App