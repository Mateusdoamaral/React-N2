import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import HomePage from './pages/homepage.jsx';
import FeaturesPage from './pages/FeaturesPage.jsx';
import RegistrationPage from './pages/RegistrationPage.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/register" element={<RegistrationPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;