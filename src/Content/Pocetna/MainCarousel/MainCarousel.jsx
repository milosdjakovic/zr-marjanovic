import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './MainCarousel.css';
import "react-alice-carousel/lib/alice-carousel.css";
import listaProizvoda from '../../Proizvodi/lista-proizvoda.json';

const MainCarousel = () => {
  const responsiveCarousel = {
    0: {
      items: 1
    },
    500: {
      items: 2
    },
    800: {
      items: 3
    }
  }

  return (
    <div className="MainCarousel">
      <AliceCarousel
        autoPlay={true}
        autoPlayInterval={3000}
        responsive={responsiveCarousel}
         >
        {listaProizvoda.map(({image, product}) => (
            <div key={`MainCarousel_${image}`}>
                <img 
                    src={require(`../../../assets/proizvodi/${image}`)} 
                    className="MainCarousel__item" 
                    alt="" />
                <p style={{ textAlign: 'center', color: 'var(--dark-03)' }}>{product}</p>
            </div>
            
        ))}
      </AliceCarousel>
    </div>
  )
}

export default MainCarousel;




