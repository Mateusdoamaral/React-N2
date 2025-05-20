import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo_lifthub.jpg';
import '../App.css';

function Navbar({ activePage }) {
  return (
    <ul>
      <li><Link to="/" className={activePage === 'home' ? 'active' : ''}>Home</Link></li>
      <li><Link to="/signup" className={activePage === 'signup' ? 'active' : ''}>Sign Up</Link></li>
      <li><Link to="/about" className={activePage === 'about' ? 'active' : ''}>Sobre</Link></li>
      <li><img src={logo} alt="Logo lift hub" id="logoImg" /></li>
      <li id="logoText">Lift Hub</li>
    </ul>
  );
}
export default Navbar;