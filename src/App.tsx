import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import Lessons from './pages/Lessons';
import Pronunciation from './pages/Pronunciation';
import Vocabulary from './pages/Vocabulary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/lessons/:level" element={<Lessons />} />
        <Route path="/pronunciation" element={<Pronunciation />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
      </Routes>
    </Router>
  );
}

export default App;
