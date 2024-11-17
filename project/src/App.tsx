import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Deals from './pages/Deals';
import Blog from './pages/Blog';
import About from './pages/About';
import Telegram from './pages/Telegram';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/telegram" element={<Telegram />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;