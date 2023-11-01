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
    { title: 'One Republic', url: 'https://www.youtube.com/embed/4Afc3DyirHM', descricao: 'Couting Stars' },
    { title: 'Imagine Dragons', url: 'https://www.youtube.com/embed/7wtfhZwyrcc', descricao: 'Beliver' },
    { title: 'One Republic', url: 'https://www.youtube.com/embed/Dm_BrGu1sHM', descricao: 'Mirage' },
    { title: 'Imagine Dragons', url: 'https://www.youtube.com/embed/zHfIkyLh-Ew', descricao: 'Children of the Sky' },
  ];
  return (
    <div>
      <h2>Meu Carrossel</h2>
      <Slider {...settings}>
      {videos.map((videos, index) => (
                    <div>
                      <iframe key={index}  className='teste'  src={videos.url}  frameBorder="0" allowFullScreen></iframe>
                    </div>
                    ))}
        
      </Slider>
    </div>
  );
}

export default Carousel;
