import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Result } from './components/Result';
import { Questions } from "../src/components/Questions"
import { Home } from "../src/components/Home"

function App() {
  return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/quiz" element={<Questions />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
  );
}

export default App;
