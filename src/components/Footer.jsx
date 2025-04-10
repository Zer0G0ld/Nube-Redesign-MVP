import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-warning pt-5 px-4 text-dark">
        <div className="container">
            <div className="row mb-4">
            <div className="col-md-6 mb-3">
                <img
                src="/src/img/empresas/Ativo 1.svg"
                alt="Nube Logo"
                width="200"
                height="89"
                />
                <div className="d-flex mt-3 gap-3">
                <a href="https://www.facebook.com/nubevagas" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a href="https://www.instagram.com/nubevagas" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="https://www.threads.net/@nubevagas" target="_blank" rel="noopener noreferrer" aria-label="Threads">
                    <i className="fa-brands fa-threads fa-lg"></i>
                </a>
                <a href="https://www.x.com/nubevagas" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="fa-brands fa-x-twitter fa-lg"></i>
                </a>
                <a href="https://www.linkedin.com/company/nubevagas" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a href="https://www.youtube.com/nubevagas/" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                    <i className="fab fa-youtube fa-lg"></i>
                </a>
                <a href="https://www.tiktok.com/@nubevagas/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <i className="fab fa-tiktok fa-lg"></i>
                </a>
                </div>
            </div>

            <div className="col-md-6 row">
                <div className="col-md-4 mb-3">
                <h6 className="fw-bold">Conheça o Nube</h6>
                <ul className="list-unstyled">
                    <li><a href="/quem-somos">Quem somos</a></li>
                    <li><a href="/trabalheconosco">Faça parte do Nube</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/tv-nube">TV Nube</a></li>
                    <li><a href="/feira-estagios/2023">Feira de Estágios</a></li>
                </ul>
                </div>
                <div className="col-md-4 mb-3">
                <h6 className="fw-bold">Instituição de Ensino</h6>
                <ul className="list-unstyled">
                    <li><a href="/escolas/gestor/">Minha Área</a></li>
                    <li><a href="/escolas/contatar">Benefícios</a></li>
                    <li><a href="/escolas/contatar" className="btn btn-sm btn-outline-dark mt-2">Associe sua instituição</a></li>
                </ul>
                </div>
                <div className="col-md-4 mb-3">
                <h6 className="fw-bold">Imprensa</h6>
                <ul className="list-unstyled">
                    <li><a href="/release">Release</a></li>
                    <li><a href="/clipping">Clipping</a></li>
                    <li><a href="/pesquisa/">Pesquisas</a></li>
                    <li><a href="/pesquisa-bolsa-auxilio">Pesquisa Bolsa-Auxílio</a></li>
                    <li><a href="/imprensa/contatar" className="btn btn-sm btn-outline-dark mt-2">Receba informações</a></li>
                </ul>
                </div>
            </div>
            </div>

            <hr />
            <div className="text-center small text-muted">
            <p>© Copyright Nube - Núcleo Brasileiro de Estágios LTDA - 2025. Direitos Autorais Reservados. |
                <a href="/politica-uso-privacidade" className="text-decoration-underline">Política de Uso e Privacidade de Dados</a>
            </p>
            <p>CNPJ: 02.704.396/0001-83 - Endereço: Rua Barão de Itapetininga, 140 - 9º andar</p>
            <p>É proibida a reprodução do conteúdo deste site sem autorização escrita do Nube.</p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;