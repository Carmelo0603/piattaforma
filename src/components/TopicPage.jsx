import React from "react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import CodeBlock from "./CodeBlock";
import Quiz from "./Quiz";
import Exercise from "./Exercise";

const TopicPage = ({ topic, onBack }) => {
  return (
    <div className="animate-slideIn">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-blue-400 mb-6 transition-colors">
        <ArrowLeft size={20} /> Torna all'Indice
      </button>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2 text-blue-500">
          {topic.icon}
          <span className="uppercase tracking-widest text-xs font-bold">{topic.category} module</span>
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-4">{topic.title}</h1>
        <p className="text-xl text-slate-300 leading-relaxed">{topic.summary}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Concetti Chiave</h2>
          <ul className="space-y-3 mb-8">
            {topic.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300">
                <span className="bg-blue-500/20 text-blue-400 p-1 rounded mt-1">
                  <ChevronRight size={14} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">Codice Esempio</h2>
          <CodeBlock code={topic.codeExample} />
        </div>

        <div>
          <Quiz data={topic.quiz} />
          <Exercise text={topic.exercise} />
        </div>
      </div>
    </div>
  );
};

export default TopicPage;
