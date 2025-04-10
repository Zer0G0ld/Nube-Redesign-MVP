import React from 'react';
import './CarrosselEmpresas.css';
import RMMAISLOGO from '../img/empresas/rmmais.png';
import SERASALOGO from '../img/empresas/serasa.png';
import NOVONISISLOGO from '../img/empresas/novonisis.png';
import HERBALIFELOGO from '../img/empresas/herbalife.png';
import MUNKSJOLOGO from '../img/empresas/munksjo.png';
import ERICSSONLOGO from '../img/empresas/ericsson.png';

const empresas = [
  {
    nome: 'RM Projetos Estruturais',
    link: '...',
    imagem: RMMAISLOGO
  },
  {
    nome: 'Serasa Experian',
    link: '...',
    imagem: SERASALOGO
  },
  {
    nome: 'Novonesis',
    link: '/top-empresa/657/novonesis',
    imagem: NOVONISISLOGO
  },
  {
    nome: 'Herbalife',
    link: '...',
    imagem: HERBALIFELOGO
  },
  {
    nome: 'Munksjo',
    link: '...',
    imagem: MUNKSJOLOGO
  },
  {
    nome: 'Ericsson',
    link: '...',
    imagem: ERICSSONLOGO
  }
];

const CarrosselEmpresas = () => {
  return (
    <section className="container-espacamento my-5">
        <h2 className="header-default mb-3">Top empresas</h2>
        <div className="cards-carrossel-container">
            <div className="cards-carrossel">
            {empresas.concat(empresas).map((empresa, i) => (
                <div
                className="card-carrossel-destaque top-empresa d-flex align-items-center"
                key={i}
                >
                <a
                    aria-label={`Clique aqui para acessar os detalhes das vagas da empresa ${empresa.nome}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={empresa.link}
                >
                    <img
                    loading="lazy"
                    alt={empresa.nome}
                    className="slideshow-imagens px-2 py-2"
                    src={empresa.imagem}
                    />
                </a>
                </div>
            ))}
            </div>
        </div>
    </section>
  );
};

export default CarrosselEmpresas;
