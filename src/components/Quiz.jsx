import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const Quiz = ({ data }) => {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelected(null);
    setSubmitted(false);
  };

  const isCorrect = selected === data.correct;

  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 mt-8">
      <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
        <CheckCircle className="text-blue-500" /> Quiz Rapido
      </h3>
      <p className="text-slate-300 mb-4">{data.question}</p>

      <div className="space-y-2">
        {data.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => !submitted && setSelected(idx)}
            className={`w-full text-left p-3 rounded-lg transition-all ${
              submitted
                ? idx === data.correct
                  ? "bg-green-900/50 border border-green-500 text-green-100"
                  : idx === selected
                    ? "bg-red-900/50 border border-red-500 text-red-100"
                    : "bg-slate-700/50 text-slate-400"
                : selected === idx
                  ? "bg-blue-600 text-white"
                  : "bg-slate-700 hover:bg-slate-600 text-slate-200"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className="mt-4 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium transition-colors w-full"
        >
          Verifica Risposta
        </button>
      ) : (
        <div className="mt-4 animate-fadeIn">
          {isCorrect ? (
            <div className="p-3 bg-green-900/30 border border-green-500/50 rounded text-green-300 flex items-center gap-2">
              <CheckCircle size={18} /> Ottimo! Risposta corretta.
            </div>
          ) : (
            <div className="p-3 bg-red-900/30 border border-red-500/50 rounded text-red-300 flex items-center gap-2">
              <XCircle size={18} /> Riprova! La risposta corretta era un'altra.
            </div>
          )}
          <button onClick={handleReset} className="mt-2 text-sm text-slate-400 hover:text-white underline">
            Ricomincia Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
