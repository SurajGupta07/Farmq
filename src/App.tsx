import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Result } from './components/Result';
import { Questions } from "../src/components/Questions"

function App() {
  return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Questions />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
  );
}

export default App;
