import React from 'react';
import translations from '../data/translations';

function LanguageToggle({ lang, setLang }) {
  const toggle = () => setLang(lang === 'en' ? 'fi' : 'en');

  return (
    <button className="lang-toggle" onClick={toggle}>
      {translations[lang].lang}
    </button>
  );
}

export default LanguageToggle;