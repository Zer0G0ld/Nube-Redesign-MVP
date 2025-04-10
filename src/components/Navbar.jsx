import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://www.nube.com.br/media/imagens/logo-black.svg"
            alt="Logo do Nube"
            height="40"
            className="me-2"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle btn btn-link" id="nubeDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Conheça o Nube
              </button>
              <ul className="dropdown-menu" aria-labelledby="nubeDropdown">
                <li><a className="dropdown-item" href="/quem-somos">Quem somos</a></li>
                <li><a className="dropdown-item" href="/trabalheconosco">Faça parte do Nube</a></li>
                <li><a className="dropdown-item" href="/blog">Blog</a></li>
                <li><a className="dropdown-item" href="/tv-nube">TV Nube</a></li>
                <li><a className="dropdown-item" href="/feira-estagios/2023">Feira de Estágios</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle btn btn-link" id="candidatoDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Candidato
              </button>
              <ul className="dropdown-menu" aria-labelledby="candidatoDropdown">
                <li><a className="dropdown-item" href="/estudantes/gestor">Minha Área</a></li>
                <li><a className="dropdown-item" href="/estudantes/vagas">Painel de Vagas</a></li>
                <li><a className="dropdown-item" href="/cursos-gratuitos">Cursos Gratuitos</a></li>
                <li><a className="dropdown-item" href="/estudantes/dicas">Dicas do Nube</a></li>
                <li><a className="dropdown-item" href="/teste-ortografico">Teste Ortográfico</a></li>
                <li><a className="dropdown-item" href="/estudantes/cadastro">Cadastre seu currículo</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle btn btn-link" id="empresaDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Empresa
              </button>
              <ul className="dropdown-menu" aria-labelledby="empresaDropdown">
                <li><a className="dropdown-item" href="/empresas/gestor">Sistema Gestor</a></li>
                <li><a className="dropdown-item" href="/empresas/servicos">Serviços</a></li>
                <li><a className="dropdown-item" href="/normas-e-legislacao">Normas e legislação</a></li>
                <li><a className="dropdown-item" href="/cursos-gestor">Cursos Gratuitos</a></li>
                <li><a className="dropdown-item" href="/empresas/contatar">Divulgue vagas</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle btn btn-link" id="instituicaoDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Instituição de Ensino
              </button>
              <ul className="dropdown-menu" aria-labelledby="instituicaoDropdown">
                <li><a className="dropdown-item" href="/escolas/gestor">Minha Área</a></li>
                <li><a className="dropdown-item" href="/escolas/contatar">Benefícios</a></li>
                <li><a className="dropdown-item" href="/escolas/contatar">Associe sua instituição</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle btn btn-link" id="imprensaDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Imprensa
              </button>
              <ul className="dropdown-menu" aria-labelledby="imprensaDropdown">
                <li><a className="dropdown-item" href="/release">Releases</a></li>
                <li><a className="dropdown-item" href="/clipping">Clipping</a></li>
                <li><a className="dropdown-item" href="/pesquisa">Pesquisas</a></li>
                <li><a className="dropdown-item" href="/pesquisa-bolsa-auxilio">Pesquisa Bolsa-Auxílio</a></li>
                <li><a className="dropdown-item" href="/imprensa/contatar">Receba informações</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle btn btn-link" id="contatoDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Contato
              </button>
              <ul className="dropdown-menu" aria-labelledby="contatoDropdown">
                <li><a className="dropdown-item" href="/duvidas">Dúvidas</a></li>
                <li><a className="dropdown-item" href="/telefones-enderecos">Telefones e Endereços</a></li>
                <li><a className="dropdown-item" href="/telefones-enderecos">Fale Conosco</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <button className="nav-link btn btn-sm btn-light text-dark px-3 ms-2">
                MT
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;