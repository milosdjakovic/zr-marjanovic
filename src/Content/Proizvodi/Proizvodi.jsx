import React from 'react';
import ContentHolder from '../ContentHolder/ContentHolder';
import './Proizvodi.css';
import listaProizvoda from './lista-proizvoda.json';

const Proizvodi = () => {
    return (
        <ContentHolder title="PROIZVODI">
            <div className="Proizvodi">
                {listaProizvoda.map(({ product, size, description, image }, i) => (
                    <div className="Proizvodi__proizvod" key={image}>
                        <div className="image__container Proizvodi__proizvod__image">
                            <img 
                                src={require(`../../assets/proizvodi/${image}`)} 
                                alt=""/>
                        </div>
                        <div className="Proizvodi__proizvod__description">
                            <h4>{product}</h4>
                            {size !== '' ? <p>{size}</p> : undefined}
                            <p>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </ContentHolder>
    )
}

export default Proizvodi;