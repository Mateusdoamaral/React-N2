import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Signup from './components/signup';
import About from './components/about';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <Router>
      <Navbar
        onNavigate={page => setActivePage(page)}
        activePage={activePage}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;