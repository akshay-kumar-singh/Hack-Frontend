import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './component/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home Page as the index page */}
        <Route path="/about" element={<About />} />  {/* About Page */}
      </Routes>
    </Router>
  );
}

export default App;
