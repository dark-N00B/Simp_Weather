import React, { useState, useEffect } from 'react';
import API_KEY from '../API_KEY';
import Current from './_weather_cards/Current';
import './Weather.css';
import Forecast from './_weather_cards/Forecast';
import AboutPanel from './AboutPanel';

export const cityArray = ['Delhi', 'Mumbai', 'Kerala', 'Manipur'];


function Weather() {

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('Delhi');
    const [showPanel, setShowPanel] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonData = await response.json();
            //console.log(jsonData)
            setWeatherData(jsonData);
        }

        fetchData();
    }, [city])
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
                        {weatherData != null ? <Current weatherData={weatherData} /> : <></>}
                    </div>
                    <div className="forecastDiv">
                        <Forecast />
                    </div>
                </div>
                <button onClick={() => setShowPanel(!showPanel)} className="aboutBtn">About Us</button>

            </div>
        </div>
    )
}

export default Weather
