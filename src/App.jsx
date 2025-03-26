import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './component/About';
import AdminPage from './pages/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home Page as the index page */}
        <Route path="/about" element={<About />} />  {/* About Page */}
        <Route path='/admin' element={<AdminPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
