import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Exercise {
  title: string;
  score?: number;
}

interface Category {
  title: string;
  exercises: Exercise[];
}

function ExerciseItem({ exercise }: { exercise: Exercise }) {
  return (
    <div className="flex items-center justify-between py-3 hover:bg-purple-50 dark:hover:bg-gray-700 rounded-lg px-4 transition-colors group">
      <div className="flex items-center gap-3">
        <div className="text-purple-600 dark:text-purple-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-gray-800 dark:text-gray-100 font-medium">{exercise.title}</h3>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {exercise.score && (
          <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">{exercise.score}%</span>
        )}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CategorySection({ category }: { category: Category }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">{category.title}</h2>
      <div className="space-y-2">
        {category.exercises.map((exercise, index) => (
          <ExerciseItem key={index} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}

function Exercises() {
  const navigate = useNavigate();

  const categories: Category[] = [
    {
      title: "Gramática",
      exercises: [
        { title: "Artigos definidos e indefinidos" },
        { title: "Conjugação verbal", score: 85 },
      ]
    },
    {
      title: "Vocabulário",
      exercises: [
        { title: "Cores" },
        { title: "Números", score: 92 },
      ]
    }
  ];

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

        <div className="space-y-6">
          {categories.map((category, index) => (
            <CategorySection key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Exercises;
