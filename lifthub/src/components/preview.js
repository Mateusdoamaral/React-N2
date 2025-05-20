import React from 'react';
import mockup from '../images/mockup_celular2.png'; // ajuste se precisar
import '../App.css';

function Preview() {
  return (
    <div className="secondContent">
      <div className="secondImage">
        <img src={mockup} alt="prévia do aplicativo" width="300px" className="mockUp" />
      </div>
      <div className="secondText">
        <p>
          Aplicativo para acompanhamento de treinos e dietas, com funcionalidades integradas para avaliação física, mental e comunicação direta entre o aluno e seu instrutor (personal trainer ou nutricionista).<br />
          O projeto visa oferecer uma plataforma centralizada onde o aluno pode registrar sua evolução, responder anamneses, realizar avaliações semanais com fotos e receber feedback personalizado do instrutor, promovendo um acompanhamento mais eficaz e humanizado.
        </p>
      </div>
    </div>
  );
}

export default Preview;