import React, { useState } from 'react';
import './App.css';
import Classifier from './components/Classifier';
import LanguageToggle from './components/LanguageToggle';
import translations from './data/translations';

function App() {
  const [lang, setLang] = useState('en');
  const [started, setStarted] = useState(false);
  const t = translations[lang];

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-inner">
          <h1 className="app-title">{t.title}</h1>
          <LanguageToggle lang={lang} setLang={setLang} />
        </div>
      </header>

      <main className="app-main">
        {!started ? (
          <div className="start-screen">
            <p className="app-subtitle">{t.subtitle}</p>
            <button className="btn-start" onClick={() => setStarted(true)}>
              {t.start}
            </button>
            <p className="app-byline">
              {t.builtBy}{' '}
               <a href="https://www.linkedin.com/in/joonas6"
                target="_blank"
                rel="noopener noreferrer">
                Joonas Ahola
              </a>
            </p>
          </div>
        ) : (
          <Classifier lang={lang} />
        )}
      </main>

<footer className="app-footer">
        <p className="footer-credit">
          {t.builtBy}{' '}
           <a href="https://www.linkedin.com/in/joonas6"
            target="_blank"
            rel="noopener noreferrer">
            Joonas Ahola
          </a>
        </p>
        <p className="footer-disclaimer">
          {lang === 'en'
            ? 'Based on Regulation (EU) 2024/1689 — the EU AI Act. This tool is for informational purposes only and does not constitute legal advice.'
            : 'Perustuu asetukseen (EU) 2024/1689 — EU:n tekoälylakiin. Tämä työkalu on tarkoitettu ainoastaan tiedottamista varten eikä se muodosta oikeudellista neuvontaa.'}
        </p>
      </footer>
    </div>
  );
}

export default App;