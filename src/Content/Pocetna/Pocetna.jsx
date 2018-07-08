import React from 'react';
import { NavLink } from 'react-router-dom';
import UgaoShow from './UgaoShow/UgaoShow';

import './Pocetna.css';

import bigLogo from '../../assets/marjanovic-logo-big.png'
import MainCarousel from './MainCarousel/MainCarousel';
import ContentHolder from '../ContentHolder/ContentHolder';

const Pocetna = props => (
    <div className="Pocetna">
        <div className="header">
            <div className="image__container header__logo">
                <img
                    src={bigLogo}
                    alt="big_company_logo" />
            </div>
        </div>
        <ContentHolder title="POČETNA" >
            <div className="Pocetna__content">
                <UgaoShow />
                <div className="Pocetna__content__opis">
                    <div className="image__container">
                        <img
                            title="Pocetna_content_opis_slika"
                            src={require("../../assets/hala-01.jpg")}
                            alt="" />
                    </div>

                    <div>
                        <h4>Zanatska Radionica Marjanović</h4>
                        <p>Firma postoji od 1997. godine i bavi se proizvodnjom limarske galanterije...</p>
                    </div>
                    
                    <NavLink
                        onClick={props.moveToTop}
                        to="/o_nama">VIŠE O KOMPANIJI</NavLink>
                </div>
                <div className="Pocetna__content__carousel">
                    <MainCarousel />
                </div>
                <NavLink
                    onClick={props.moveToTop}
                    to="/proizvodi">POGLEDAJ SVE PROIZVODE</NavLink>
            </div>
        </ContentHolder>
        {/* <MainCarousel />
            <NavLink
                onClick={props.moveToTop}
                to="/proizvodi">POGLEDAJ SVE PROIZVODE</NavLink> */}
        <div>
        </div>
    </div>
)

export default Pocetna;