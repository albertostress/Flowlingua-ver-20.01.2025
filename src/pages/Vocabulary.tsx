import React from 'react';
import { useNavigate } from 'react-router-dom';

function Vocabulary() {
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
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Vocabulário</h1>
          <p className="text-gray-600 dark:text-gray-300">Expanda seu vocabulário em alemão</p>
        </div>

        {/* Add vocabulary content here */}
      </div>
    </div>
  );
}

export default Vocabulary;
