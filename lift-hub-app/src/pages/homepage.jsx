import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <header className="hero-section">
        <h1>Bem-vindo ao Lift Hub!</h1>
        <p>Transforme seus objetivos de fitness em realidade. Encontre mentores, treinos e dietas personalizadas.</p>
        <div className="hero-buttons">
          <Link to="/features" className="btn btn-primary">Conheça as Funcionalidades</Link>
          <Link to="/register" className="btn btn-secondary">Comece Agora</Link>
        </div>
      </header>

      <section className="intro-section">
        <h2>O que é o Lift Hub?</h2>
        <p>
          Lift Hub é uma plataforma inovadora projetada para conectar entusiastas do fitness
          com personal trainers qualificados. Oferecemos ferramentas para gerenciar seus treinos,
          dietas, acompanhar seu progresso e manter uma comunicação direta com seu mentor.
          Nossa missão é facilitar sua jornada para uma vida mais saudável e ativa.
        </p>
      </section>
    </div>
  );
}

export default HomePage;