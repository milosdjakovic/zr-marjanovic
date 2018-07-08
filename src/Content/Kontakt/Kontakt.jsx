import React from 'react';
import ContentHolder from '../ContentHolder/ContentHolder';

import './Kontakt.css';

const Kontakt = () => {
    const contactData = [
        {
            type: 'Zanarska Radionica',
            title: 'Marjanović',
            place: 'Subotinac',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1444.619132529447!2d21.697126657364887!3d43.60158039474055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM2JzA1LjciTiAyMcKwNDEnNTIuNSJF!5e0!3m2!1sen!2srs!4v1530700858068'
        },
        {
            type: 'Maloprodaja',
            title: 'DS Lim',
            place: 'Niš',
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.0782243138133!2d21.868162315332658!3d43.31262188240503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE4JzQ1LjQiTiAyMcKwNTInMTMuMyJF!5e0!3m2!1sen!2srs!4v1530701313881'
        },
    ]

    return (
        <ContentHolder title="KONTAKT" >
            <div className="Kontakt">
                <div className="Kontakt__data">
                    <div className="Kontakt__phone">
                        <p>Kontakt telefoni:</p>
                        <p>Fix: +38118 877 649</p>
                        <p>Mob: +38163 77 17 981</p>
                        <p style={{ backgroundColor: '#8961E7', padding: "5px 0", borderRadius: 'var(--border-radius)' }}><i class="fab fa-viber"></i> Viber: +38165/88-77-649</p>
                    </div>
                    <div className="Kontakt__mail">
                        <p>Email:</p>
                        <a href="mailto:zrmetaloprerada@gmail.com">zrmetaloprerada@gmail.com</a>
                    </div>
                </div>
                {contactData.map(({ type, title, place, map }, i) => (
                    <div className="Kontakt__single" key={`contact_${i}`}>
                        <iframe title={`map-${i}`} src={map} frameBorder="0"></iframe>
                        <div className="Kontakt__single__data">
                            <p>{type}</p>
                            <h4>{title}</h4>
                            <p>{place}</p>
                        </div>
                    </div>
                ))}
            </div>
        </ContentHolder>
    )
}


export default Kontakt;