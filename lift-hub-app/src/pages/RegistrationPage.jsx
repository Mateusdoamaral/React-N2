import React from 'react';
import RegistrationForm from '../components/RegistrationForm.jsx';
import './RegistrationPage.css';

function RegistrationPage() {
  return (
    <div className="registration-page">
      <h2>Crie sua Conta no Lift Hub</h2>
      <p>Preencha o formulário abaixo para começar sua jornada fitness conosco. Escolha se você é um aluno buscando orientação ou um personal trainer pronto para inspirar!</p>
      <RegistrationForm />
    </div>
  );
}

export default RegistrationPage;