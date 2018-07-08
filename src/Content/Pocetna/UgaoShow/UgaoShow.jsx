import React, { Component } from 'react';
import './UgaoShow.css';
import ralValues from './ral-values.json';

class UgaoShow extends Component {
    state = {
        ral: 'RAL-9002'
    }

    setColor = (event) => {
        this.setState({
            ral: event.target.value
        })
    }

    render() {
        return (
            <div className="UgaoShow" >
                <div className="image__container UgaoShow__image">
                    <img
                        title="pocetna_ugao"
                        src={require(`../../../assets/ral-uglovi/${this.state.ral}.png`)}
                        alt="" />
                </div>

                <div className="UgaoShow__selectors">
                    {ralValues.map(({ btnColor, textColor, value }, i) => (
                        <div 
                            className="UgaoShow__selector" 
                            style={{ backgroundColor: btnColor, color: textColor }}
                            key={btnColor} 
                            onChange={this.setColor}>
                            <input type="radio" id={value} value={value} name="ral-selector"/>
                            <label htmlFor={value}>{value}</label>
                        </div>
                    ))}
                </div>

                <div className="UgaoShow__description">
                    <h4>Ugao 90°</h4>
                    <p>Spoljasnji i unutrasnji element sistema za odvođenje kišnice (vode) i ugrađuje se na spoljašnjim i unutrašnjim uglovima krova.</p>
                    <p>Izaberite boju:</p>
                </div>
            </div>
        )
    }
}

export default UgaoShow;