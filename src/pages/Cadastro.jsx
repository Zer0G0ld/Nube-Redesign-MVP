// src/pages/Cadastro.jsx
import React, { useState } from 'react';

const Cadastro = () => {
  const [ead, setEad] = useState(true);
  const [residencia, setResidencia] = useState('');
  const [polo, setPolo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Cadastro salvo:\nTipo: ${ead ? 'EAD' : 'Presencial'}\nResidência: ${residencia}\nPolo: ${polo}`);
  };

  return (
    <div>
      <h2>Cadastro do Estudante</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={ead}
            onChange={() => setEad(!ead)}
            id="eadCheck"
          />
          <label className="form-check-label" htmlFor="eadCheck">
            Sou aluno EAD
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">Cidade/Bairro de Residência</label>
          <input
            type="text"
            className="form-control"
            value={residencia}
            onChange={(e) => setResidencia(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nome do Polo (se EAD)</label>
          <input
            type="text"
            className="form-control"
            value={polo}
            onChange={(e) => setPolo(e.target.value)}
            disabled={!ead}
          />
        </div>
        <button type="submit" className="btn btn-primary">Salvar</button>
      </form>
    </div>
  );
};

export default Cadastro;
