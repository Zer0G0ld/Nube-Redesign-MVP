// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import FiltroVagas from './pages/FiltroVagas';
import VagaDetalhe from './pages/VagaDetalhe';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/filtro-vagas" element={<FiltroVagas />} />
          <Route path="/vaga/:id" element={<VagaDetalhe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
