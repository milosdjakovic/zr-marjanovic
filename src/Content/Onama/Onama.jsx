import React from 'react';
import ContentHolder from '../ContentHolder/ContentHolder';
import './Onama.css';

import office from '../../assets/office-01.jpg'
const Onama = () => (
    <ContentHolder title="O NAMA" >
        <div className="Onama">
            <div className="image__container">
                <img
                    className="Onama__image"
                    src={office}
                    alt="image_of_office" />
            </div>
            <div className="Onama__text">
                <h3>Zanatska Radionica Marjanović</h3>
                <p>
                    Firma postoji od 1997. godine i proizvodi limarsku
                galanteriju svih boja i dimenzija. Posedujemo i
                patent za presovanu vinklu dobijenu od Zavoda
                za Intelektualnu Svojinu Srbije koji je upisan u
                Registar malih patenata od 17.08.2012, koji
                je i objavljen u Sluzbenom Glasniku
                intelektualne svojine br. 6/2012, Beograd.
                </p>
            </div>
            <div className="Onama__document">
                <a className="firma__dokument" href={require('../../assets/pepdv.pdf')} target="_blank">Obrazac PEPDV</a>
                <a className="firma__dokument" href={require('../../assets/apr_resenje.pdf')} target="_blank">Rešenje APR</a>
            </div>
        </div>
    </ContentHolder>
)

export default Onama;