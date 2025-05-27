import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">Lift Hub</Link>
        <p className="navbar-intro">Seu parceiro para uma vida mais saudável e forte. Conectamos você a personal trainers e planos personalizados.</p>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/features">Funcionalidades</Link></li>
        <li><Link to="/register" className="navbar-register-button">Cadastre-se</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;