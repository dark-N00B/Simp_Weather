import React, { useState } from 'react';
import Current from './_weather_cards/Current';
import './Weather.css';
import Forecast from './_weather_cards/Forecast';
import AboutPanel from './AboutPanel';

export const cityArray = ['Delhi', 'Mumbai', 'Kerala', 'Manipur'];


function Weather() {

    
    const [city, setCity] = useState('Delhi');
    const [showPanel, setShowPanel] = useState(false);

    
    return (
        <div className="mainDiv">
            {showPanel ? <AboutPanel /> : <></>}
            <div className="weatherDiv">
                <div className="cityDiv">
                    <select className="cityDropdown" onChange={(e)=>setCity(e.target.value)}>
                        {cityArray.map((item, key) => {
                            return <option key={key} value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div className="weatherInfo">
                    <div className="currentWeatherDiv">
                        <Current city={city} />
                    </div>
                    <div className="forecastDiv">
                        <Forecast city={city} />
                    </div>
                </div>
                <button onClick={() => setShowPanel(!showPanel)} className="aboutBtn">About Us</button>

            </div>
        </div>
    )
}

export default Weather
