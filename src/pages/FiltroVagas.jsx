// src/pages/FiltroVagas.jsx
import React from 'react';

const FiltroVagas = () => {
  return (
    <div>
      <h2>Filtro de Vagas Inteligente</h2>
      <p>
        Aqui seria aplicado um filtro que considera:
        <ul>
          <li>Endereço residencial para estudantes EAD</li>
          <li>Local do polo apenas se for presencial</li>
          <li>Distância real baseada em mapa</li>
          <li>Mensagens claras quando não houver compatibilidade</li>
        </ul>
      </p>
      <div className="alert alert-info">
        Simulação: Nenhuma vaga foi encontrada com os filtros atuais. Por favor, ajuste seu endereço ou formato do curso.
      </div>
    </div>
  );
};

export default FiltroVagas;
