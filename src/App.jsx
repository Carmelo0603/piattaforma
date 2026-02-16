import React, { useState } from "react";
import { Code, BookOpen, Layout } from "lucide-react";
import { topics } from "./components/data/curriculum";
import TopicPage from "./components/TopicPage";
import TopicCard from "./components/TopicCard";

export default function App() {
  const [currentTopicId, setCurrentTopicId] = useState(null);
  const [filter, setFilter] = useState("all"); // all, basics, advanced

  const currentTopic = topics.find((t) => t.id === currentTopicId);

  // Filtra argomenti
  const filteredTopics = topics.filter((t) => filter === "all" || t.category === filter);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-2 rounded-lg">
              <Code className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white leading-none">React Mastery</h1>
              <span className="text-xs text-slate-400">Epicode Syllabus Edition</span>
            </div>
          </div>
          {currentTopicId && (
            <span className="text-sm font-mono text-blue-400 hidden md:block">
              {currentTopic.category.toUpperCase()} / {currentTopicId.toUpperCase()}
            </span>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {!currentTopicId ? (
          // INDEX VIEW
          <div className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
                Impara React alla Perfezione
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Un percorso completo dai fondamenti alle architetture avanzate. Scegli un modulo per iniziare.
              </p>

              {/* Filters */}
              <div className="flex justify-center gap-4 mt-8">
                {["all", "basics", "advanced"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      filter === f ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25" : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                    }`}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTopics.map((topic) => (
                <TopicCard key={topic.id} topic={topic} onClick={() => setCurrentTopicId(topic.id)} />
              ))}
            </div>
          </div>
        ) : (
          // TOPIC DETAIL VIEW
          <TopicPage topic={currentTopic} onBack={() => setCurrentTopicId(null)} />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-20 py-8 text-center text-slate-500 text-sm">
        <p>© 2024 React Mastery Syllabus. Based on Epicode Learning Path.</p>
        <div className="flex justify-center gap-4 mt-2">
          <BookOpen size={16} />
          <Code size={16} />
          <Layout size={16} />
        </div>
      </footer>
    </div>
  );
}
