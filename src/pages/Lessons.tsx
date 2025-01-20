import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Level {
  level: string;
  description: string;
  topics: string[];
  color: string;
  textColor: string;
}

const levels: Level[] = [
  {
    level: "A1",
    description: "Iniciante",
    topics: ["Cumprimentos", "Números", "Cores", "Família"],
    color: "bg-purple-100",
    textColor: "text-purple-600"
  },
  {
    level: "A2",
    description: "Básico",
    topics: ["Compras", "Tempo", "Transporte", "Comida"],
    color: "bg-blue-100",
    textColor: "text-blue-600"
  },
  {
    level: "B1",
    description: "Intermediário",
    topics: ["Viagens", "Trabalho", "Saúde", "Educação"],
    color: "bg-green-100",
    textColor: "text-green-600"
  }
];

function Lessons() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-purple-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto p-8">
        <button 
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Voltar
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Aulas de Alemão</h1>
          <p className="text-gray-600 dark:text-gray-300">Escolha seu nível para começar a aprender</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((lvl, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer ${lvl.color} dark:bg-opacity-10`}
              onClick={() => navigate(`/lessons/${lvl.level.toLowerCase()}`)}
            >
              <div className={`text-4xl font-bold mb-4 ${lvl.textColor}`}>{lvl.level}</div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{lvl.description}</h2>
              
              <div className="space-y-2 mt-4">
                {lvl.topics.slice(0, 3).map((topic, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{topic}</span>
                  </div>
                ))}
                {lvl.topics.length > 3 && (
                  <div className="text-purple-600 dark:text-purple-400 font-medium">
                    + {lvl.topics.length - 3} tópicos
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lessons;
