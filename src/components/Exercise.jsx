import React from "react";
import { Terminal } from "lucide-react";

const Exercise = ({ text }) => (
  <div className="bg-slate-900/50 border border-dashed border-blue-500/50 p-6 rounded-xl mt-8">
    <h3 className="text-lg font-bold text-blue-400 mb-2 flex items-center gap-2">
      <Terminal size={20} /> Esercizio Pratico
    </h3>
    <p className="text-slate-300 leading-relaxed">{text}</p>
  </div>
);

export default Exercise;
