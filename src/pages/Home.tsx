import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../components/ui/theme-toggle';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-purple-50 dark:bg-gray-900 flex flex-col items-center p-8">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Vamos começar?</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">Escolha uma atividade para iniciar</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Aulas Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
              <svg className="w-6 h-6 text-purple-500 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Aulas</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Aprenda novos conceitos e vocabulário</p>
              <button 
                onClick={() => navigate('/lessons')}
                className="w-full py-2 text-center border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-200"
              >
                Ver aulas
              </button>
            </div>
          </div>
        </div>

        {/* Exercícios Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
              <svg className="w-6 h-6 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Exercícios</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Pratique o que você aprendeu</p>
              <button 
                onClick={() => navigate('/exercises')}
                className="w-full py-2 text-center border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-200"
              >
                Ver exercícios
              </button>
            </div>
          </div>
        </div>

        {/* Pronúncia Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
              <svg className="w-6 h-6 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0-4H3m15 0h3m-3-7a7 7 0 00-7-7m0 0a7 7 0 00-7 7m7-7v4m0-4h14m-14 0H3" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Pronúncia</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Melhore sua pronúncia em alemão</p>
              <button 
                onClick={() => navigate('/pronunciation')}
                className="w-full py-2 text-center border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-200"
              >
                Ver pronúncia
              </button>
            </div>
          </div>
        </div>

        {/* Vocabulário Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
              <svg className="w-6 h-6 text-yellow-500 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Vocabulário</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Expanda seu vocabulário em alemão</p>
              <button 
                onClick={() => navigate('/vocabulary')}
                className="w-full py-2 text-center border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-200"
              >
                Ver vocabulário
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
