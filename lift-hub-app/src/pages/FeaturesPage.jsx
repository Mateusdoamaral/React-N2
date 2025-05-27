import React, { useState } from 'react';
import './FeaturesPage.css';

// 1. Importe suas imagens de mockup da pasta assets
//    Certifique-se de que essas imagens existam em 'src/assets/'
//    Ajuste os nomes dos arquivos conforme necessário.
import mockupImg1 from '../assets/images/mockup_celular3.png'; // Exemplo
import mockupImg2 from '../assets/images/mockup_celular2.png'; // Exemplo
import mockupImg3 from '../assets/images/mockup_celular1.png'; // Exemplo
import mockupImg4 from '../assets/images/mockup_celular4.png'; // Exemplo
// Adicione mais imports se tiver mais imagens

// 2. Crie um array com as imagens importadas
const mockupImages = [
  mockupImg1,
  mockupImg2,
  mockupImg3,
  mockupImg4
  // Adicione mais imagens aqui se desejar
];

function FeaturesPage() {
  // 3. State para rastrear o índice da imagem atual do mockup
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 4. Função para ir para a PRÓXIMA imagem
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % mockupImages.length);
    // O operador '%' (módulo) garante que volte para a primeira imagem após a última
  };

  // 5. Função para ir para a imagem ANTERIOR
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + mockupImages.length) % mockupImages.length);
    // Adicionar mockupImages.length antes de '%' garante que o resultado seja sempre positivo
  };

  return (
    <div className="features-page">
      <h2>Funcionalidades do Lift Hub</h2>
      <p className="features-intro">
        Descubra como o Lift Hub pode te ajudar a alcançar seus objetivos de fitness com nossas ferramentas intuitivas e personalizadas.
      </p>

      <div className="features-grid">
        <div className="feature-item">
          <h3>Perfis Detalhados</h3>
          <p>Crie seu perfil como aluno ou personal trainer. Alunos podem registrar seu progresso, metas e histórico. Personal trainers podem mostrar suas especialidades e experiência.</p>
        </div>
        <div className="feature-item">
          <h3>Gestão de Treinos</h3>
          <p>Receba ou crie planos de treino completos. Acompanhe seus exercícios, séries, repetições e cargas. Visualize seu progresso ao longo do tempo.</p>
        </div>
        <div className="feature-item">
          <h3>Planejamento de Dietas</h3>
          <p>Acesse planos alimentares personalizados ou registre suas refeições. Monitore calorias, macronutrientes e mantenha o foco na sua nutrição.</p>
        </div>
        <div className="feature-item">
          <h3>Chat Integrado</h3>
          <p>Comunicação direta e eficiente entre aluno e personal trainer. Tire dúvidas, receba feedback e mantenha-se motivado.</p>
        </div>
        <div className="feature-item">
          <h3>Acompanhamento de Progresso</h3>
          <p>Gráficos e relatórios visuais para acompanhar sua evolução em treinos, medidas corporais e metas de dieta.</p>
        </div>
        <div className="feature-item">
          <h3>Conexão Aluno-Mentor</h3>
          <p>Facilitamos a busca e conexão com personal trainers qualificados que se encaixam no seu perfil e objetivos.</p>
        </div>
      </div>

      <div className="mockup-section">
        <h3>Veja o App em Ação!</h3>
        <div className="mockup-display-area"> {/* Container para imagem e botões */}
          <div className="mockup-placeholder">
            {mockupImages.length > 0 ? (
              <img
                src={mockupImages[currentImageIndex]}
                alt={`Lift Hub App Mockup ${currentImageIndex + 1}`}
                className="mockup-image"
              />
            ) : (
              <p>Coloque suas imagens de mockup na pasta 'src/assets/' e configure-as no arquivo FeaturesPage.jsx.</p>
            )}
          </div>

          {/* 6. Botões para navegar entre as imagens */}
          {mockupImages.length > 1 && ( // Só mostra os botões se houver mais de uma imagem
            <div className="mockup-controls">
              <button onClick={handlePrevImage} className="mockup-button">
                Anterior
              </button>
              <button onClick={handleNextImage} className="mockup-button">
                Próxima
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturesPage;