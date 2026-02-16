import React from "react";
import { ChevronRight, Code } from "lucide-react";

const TopicCard = ({ topic, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-blue-500/50 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
    >
      <div
        className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity ${
          topic.category === "basics" ? "text-blue-500" : "text-purple-500"
        }`}
      >
        <Code size={100} />
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 rounded-xl ${topic.category === "basics" ? "bg-blue-500/10 text-blue-400" : "bg-purple-500/10 text-purple-400"}`}>
          {topic.icon}
        </div>
        <span className={`text-xs font-bold uppercase tracking-wider ${topic.category === "basics" ? "text-blue-400" : "text-purple-400"}`}>
          {topic.category}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{topic.title}</h3>
      <p className="text-slate-400 text-sm line-clamp-3">{topic.summary}</p>

      <div className="mt-6 flex items-center text-sm font-medium text-slate-500 group-hover:text-white transition-colors">
        Inizia Modulo <ChevronRight size={16} className="ml-1" />
      </div>
    </div>
  );
};

export default TopicCard;
