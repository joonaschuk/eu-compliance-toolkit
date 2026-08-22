import React from 'react';
import translations from '../data/translations';

const resultColors = {
  prohibited: '#c0392b',
  high_risk: '#e67e22',
  not_high_risk: '#27ae60',
  out_of_scope: '#7f8c8d',
  not_ai_system: '#7f8c8d',
  gpai: '#2980b9',
  gpai_systemic: '#8e44ad',
  transparency: '#16a085',
  minimal: '#27ae60',
};

function Result({ result, lang, onRestart }) {
  const t = translations[lang];
  const content = result[lang];
  const color = resultColors[result.type] || '#333';

  return (
    <div className="result-container">
      <div className="result-badge" style={{ backgroundColor: color }}>
        {content.title}
      </div>
      <p className="result-article">{result.article}</p>
      <p className="result-explanation">{content.explanation}</p>
      {content.obligations && (
        <div className="result-obligations">
          <h3>Obligations</h3>
          <p>{content.obligations}</p>
        </div>
      )}
      {result.selectedArticles && result.selectedArticles.length > 0 && (
        <div className="result-obligations">
          <h3>{lang === 'en' ? 'Prohibited provisions' : 'Kielletyt säännökset'}</h3>
          <ul>
            {result.selectedArticles.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      )}
      {result.transparencyArticles && result.transparencyArticles.length > 0 && (
        <div className="result-obligations">
          <h3>{lang === 'en' ? 'Applicable transparency obligations' : 'Sovellettavat läpinäkyvyysvelvoitteet'}</h3>
          <ul>
            {result.transparencyArticles.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      )}
      <button className="btn-restart" onClick={onRestart}>
        {t.restart}
      </button>
    </div>
  );
}

export default Result;