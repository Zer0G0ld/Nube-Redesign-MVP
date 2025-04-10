import React from 'react';
import { Link } from 'react-router-dom';

const VagasDestaque = () => {
  const totalVagas = 7341;
  const noPerfil = 0;

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="mb-4">
          <h2 className="fw-bold">Vagas de Estágio e Aprendizagem</h2>
          <h5>
            <span className="text-warning fw-bold">{totalVagas}</span> vagas abertas,
            <span className="text-warning fw-bold"> {noPerfil}</span> no seu perfil
          </h5>
          <button
            type="button"
            className="btn btn-warning mt-3 text-white fw-semibold"
            onClick={() => {
                alert('🔎 A filtragem detalhada ainda não foi implementada.');
            }}
            >
            Filtragem detalhada
        </button>

        </div>

        {/* Lista de Vagas Simuladas */}
        <div className="row row-cols-1 row-cols-md-2 g-4 text-start">
          <div className="col">
            <div className="card h-100 shadow-sm border-start border-4 border-success">
              <div className="card-body">
                <h5 className="card-title">Marketing - 332214</h5>
                <p className="card-text">📍 São Paulo | SP</p>
                <p className="card-text">💸 R$ 1.900,00</p>
                <p className="text-muted small">Inclusão para pessoas Negras e/ou pardas</p>
                <Link to="/vagas/123">Ver detalhes</Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 shadow-sm border-start border-4 border-danger">
              <div className="card-body">
                <h5 className="card-title">Tecnologia da Informação - 283072</h5>
                <p className="card-text">📍 São Paulo | SP</p>
                <p className="card-text">💸 R$ 690,00</p>
                <p className="text-muted small">Vaga de Aprendiz</p>
                <Link to="/vagas/123">Ver detalhes</Link>
              </div>
            </div>
          </div>
          {/* Adicione mais cards conforme necessário */}
        </div>

        <div className="text-center mt-4">
          <a href="/estudantes/vagas" className="btn btn-success fw-bold fs-5">
            Veja mais vagas
          </a>
        </div>
      </div>
    </section>
  );
};

export default VagasDestaque;
