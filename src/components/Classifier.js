import React, { useState } from 'react';
import questions from '../data/questions';
import translations from '../data/translations';
import Result from './Result';

function findQuestion(id) {
  return questions.find((q) => q.id === id);
}

function Classifier({ lang }) {
  const [currentId, setCurrentId] = useState('q1');
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState(null);
  const [selected, setSelected] = useState([]);

  const t = translations[lang];
  const current = findQuestion(currentId);

  const handleSingle = (option) => {
    if (option.result) {
      setResult(option.result);
      return;
    }
    if (option.next) {
      setHistory([...history, currentId]);
      setCurrentId(option.next);
      setSelected([]);
    }
  };

  const handleMultiToggle = (optionId) => {
    const option = current.options.find((o) => o.id === optionId);

    if (option.exclusive) {
      setSelected([optionId]);
      return;
    }

    const exclusiveId = current.options.find((o) => o.exclusive)?.id;
    const withoutExclusive = selected.filter((id) => id !== exclusiveId);

    if (withoutExclusive.includes(optionId)) {
      setSelected(withoutExclusive.filter((id) => id !== optionId));
    } else {
      setSelected([...withoutExclusive, optionId]);
    }
  };

  const handleMultiSubmit = () => {
    if (selected.length === 0) return;

    const exclusiveOption = current.options.find(
      (o) => o.exclusive && selected.includes(o.id)
    );

    if (exclusiveOption) {
      if (exclusiveOption.next) {
        setHistory([...history, currentId]);
        setCurrentId(exclusiveOption.next);
        setSelected([]);
      } else if (current.minimalResult) {
        setResult(current.minimalResult);
      }
      return;
    }

    if (currentId === 'q3') {
      const selectedOptions = current.options.filter((o) =>
        selected.includes(o.id)
      );
      const articles = selectedOptions.map((o) => o.article).filter(Boolean);
      setResult({
        ...current.prohibitedResult,
        selectedArticles: articles,
      });
      return;
    }

    if (currentId === 'q8') {
      const selectedOptions = current.options.filter((o) =>
        selected.includes(o.id)
      );
      const articles = selectedOptions.map((o) => o.article).filter(Boolean);
      setResult({
        ...current.transparencyResult,
        transparencyArticles: articles,
      });
      return;
    }
  };

  const handleBack = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory(history.slice(0, -1));
    setCurrentId(prev);
    setSelected([]);
    setResult(null);
  };

  const handleRestart = () => {
    setCurrentId('q1');
    setHistory([]);
    setResult(null);
    setSelected([]);
  };

  if (result) {
    return <Result result={result} lang={lang} onRestart={handleRestart} />;
  }

  return (
    <div className="classifier-container">
      <p className="question-counter">
        {lang === 'en' ? 'Step' : 'Vaihe'} {history.length + 1}
      </p>
      <h2 className="question-text">{current[lang].question}</h2>
      {current[lang].hint && (
        <p className="question-hint">{current[lang].hint}</p>
      )}

      <div className="options-list">
        {current.type === 'single' &&
          current.options.map((option) => (
            <button
              key={option.id}
              className="option-btn"
              onClick={() => handleSingle(option)}
            >
              {option[lang]}
            </button>
          ))}

        {current.type === 'multi' && (
          <>
            {current.options.map((option) => (
              <button
                key={option.id}
                className={`option-btn ${
                  selected.includes(option.id) ? 'selected' : ''
                }`}
                onClick={() => handleMultiToggle(option.id)}
              >
                {option[lang]}
              </button>
            ))}
            <button
              className="btn-next"
              onClick={handleMultiSubmit}
              disabled={selected.length === 0}
            >
              {t.next}
            </button>
          </>
        )}
      </div>

      {history.length > 0 && (
        <button className="btn-back" onClick={handleBack}>
          {t.back}
        </button>
      )}
    </div>
  );
}

export default Classifier;