import React from 'react';
import CarrosselEmpresas from '../components/CarrosselEmpresas';
import Footer from '../components/Footer';
import BannerDestaque from './BannerDestaque';

const Home = () => {
  return (
    <>
      <div className="container mt-5 pt-4">
        <header className="mb-5 text-center">
          <h1 className="display-5 fw-bold">Bem-vindo ao Nube Redesign</h1>
          <p className="lead">
            Plataforma redesenhada com foco em usabilidade, inclusão e experiência para estudantes de todo o Brasil.
          </p>
        </header>

        <CarrosselEmpresas />

        {/*<section className="mb-5">
          <h3 className="mb-3">Vagas em Destaque</h3>
          <div className="row row-cols-1 row-cols-md-2 g-3">
            <div className="col">
              <div className="card p-3 shadow-sm border-start border-4 border-primary">
                <h5 className="card-title">Engenharia Mecânica - 332603</h5>
                <p className="card-text mb-1">📍 Belford Roxo | RJ</p>
                <p className="card-text mb-1">💸 R$ 1.900,00</p>
                <p className="card-text text-muted small">
                  Vaga de inclusão para pessoas Negras e/ou pardas
                </p>
                <button className="btn btn-outline-primary btn-sm mt-2">Ver detalhes</button>
              </div>
            </div>
          </div>
        </section>*/}


        <BannerDestaque />

        <section className="mb-5">
          <h3 className="mb-3">Enquete</h3>
          <div className="card p-3">
            <p className="fw-semibold">
              🗳️ O que o mercado de trabalho deveria oferecer para jovens iniciantes?
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">🟩 30,22% - Treinamento e capacitação inicial</li>
              <li className="list-group-item">🟨 24,52% - Mais vagas de estágio e aprendiz</li>
              <li className="list-group-item">🟨 20,95% - Oportunidades claras de crescimento</li>
              <li className="list-group-item">🟨 15,17% - Mentoria e orientação de carreira</li>
              <li className="list-group-item">🟥 9,14% - Políticas de inclusão e diversidade</li>
            </ul>
            <p className="mt-2 text-muted small">
              Período: 07/04/2025 a 18/04/2025 | Total de votos: 3842
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
