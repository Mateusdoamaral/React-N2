import React, { useState } from 'react';
import Preview from './preview';
import '../App.css';

function Home() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div>
      <div className="content">
        <p className="mainParagraph">seu CORPO <br /> sua MENTE <br /> seu RITMO <br /> seu APP.</p>
        <p id="lilSlogan">Um App, toda a sua jornada.</p>
        <button
          id="previewButton"
          onClick={() => setShowPreview(!showPreview)}
          //style={{
          //  boxShadow: showPreview ? '0 0 20px rgba(30, 144, 255, 1)' : '0 0 10px rgba(30, 144, 255, 0.7)'
         // }}
        >
          {showPreview ? 'Esconder prévia' : 'Clique para ter uma prévia'}
        </button>
      </div>
      {showPreview && <Preview />}
    </div>
  );
}

export default Home;