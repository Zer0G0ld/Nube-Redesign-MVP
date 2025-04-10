import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ESTAGIOTEGMAIMG from '../img/estagio/programa-de-estagio-tegma-2025.png';
import PINHEIROSIMG from '../img/estagio/banner-home-esporte-clube-pinheiros-ecp.png';
import OUTBACKIMG from '../img/estagio/banner-vagas-outback-aprendizes.png';

const banners = [
  {
    imagem: ESTAGIOTEGMAIMG,
    alt: 'Programa de Estágio Tegma 2025',
    link: 'http://nube.ai/8yS',
    cta: 'Inscreva-se!'
  },
  {
    imagem: PINHEIROSIMG,
    alt: 'Esporte Clube Pinheiros',
    link: 'http://nube.ai/63y',
    cta: 'Confira agora'
  },
  {
    imagem: OUTBACKIMG,
    alt: 'Vagas Outback Aprendizes',
    link: 'http://nube.ai/2M2',
    cta: 'Confira agora'
  }
];

const BannerDestaque = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="banner-destaque bg-light py-4">
      <div className="container">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className="text-center">
              <img
                src={banner.imagem}
                alt={banner.alt}
                className="img-fluid rounded"
                style={{ maxHeight: '450px', objectFit: 'cover' }}
              />
              <div className="mt-3">
                <a
                  href={banner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success"
                >
                  {banner.cta}
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BannerDestaque;
