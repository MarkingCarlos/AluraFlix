import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: null, // Remove a seta "próximo"
    prevArrow: null, // Remove a seta "anterior"
    autoplay: true, // Ativa a reprodução automática
    autoplaySpeed: 10000,
  };

  const videos = [
    { cantor: 'One Republic', url: 'https://www.youtube.com/embed/4Afc3DyirHM', Nome: 'Couting Stars',category: 'Pop' },
    { cantor: 'Imagine Dragons', url: 'https://www.youtube.com/embed/7wtfhZwyrcc', Nome: 'Beliver',category: 'Pop' },
    { cantor: 'One Republic', url: 'https://www.youtube.com/embed/Dm_BrGu1sHM', Nome: 'Mirage',category: 'Pop' },
    { cantor: 'Imagine Dragons', url: 'https://www.youtube.com/embed/zHfIkyLh-Ew', Nome: 'Children of the Sky',category: 'Pop' },
    { cantor: 'Na Na Na', url: 'https://www.youtube.com/embed/egG7fiE89IU', Nome: 'My Chemical Romance',category: 'Rock' },
    { cantor: 'Måneskin', url: 'https://www.youtube.com/embed/XrsbfrFPATs', Nome: 'GOSSIP',category: 'Rock' },
    { cantor: 'Måneskin', url: 'https://www.youtube.com/embed/yOb9Xaug35M', Nome: 'I WANNA BE YOUR SLAVE',category: 'Rock' },
    { cantor: 'Luísa Sonza', url: 'https://www.youtube.com/embed/xtXbC1o2JRw', Nome: 'A Dona Aranha',category: 'Nacional' },
    { cantor: 'Canção Infantil', url: 'https://www.youtube.com/embed/Ri-eF5PJ2X0', Nome: 'Cesar MC',category: 'Nacional' },
    { cantor: 'SuperCombo', url: 'https://www.youtube.com/embed/YW4-V0xQkTg', Nome: 'Piloto Automático',category: 'Nacional' },
    { cantor: 'Cesar Mc', url: 'https://www.youtube.com/embed/Vx2QswxE1cg', Nome: 'DAI A CESAR O QUE É DE CESAR',category: 'Rap' },
    { cantor: 'ADL', url: 'https://www.youtube.com/embed/R_4Clufmtq8', Nome: 'Favela Vive 5',category: 'Rap' },
    { cantor: 'Rodrigo Zin', url: 'https://www.youtube.com/embed/A2HCiEX7hyc', Nome: 'Reconhecimento',category: 'Rap' },
  ];
  const categoria = [
    { category: 'Pop' },
    { category: 'Rock' },
    { category: 'Rap' },
    { category: 'Nacional' },
  ];
  return (
    <div>
      {categoria.map((categoria,CategoriaIndex)=>(
        <div key={CategoriaIndex}>
          <div id='txth2'>
            <h2>{categoria.category}</h2>
          </div>
          <Slider {...settings}>
            {videos.filter((videos) => videos.category === categoria.category).map((videos, videoIndex)=>(
              <div key={videoIndex}>
                 <iframe   className='PerVideo'  src={videos.url}  frameBorder="0" allowFullScreen></iframe>
              </div>
            ))}
        
      </Slider>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
