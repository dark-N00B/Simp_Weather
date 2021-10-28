import React, { useState, useEffect } from 'react';
import API_KEY from '../API_KEY';
import Current from './_weather_cards/Current';
import './Weather.css';
import Forecast from './_weather_cards/Forecast';




function Weather() {

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('Delhi');

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonData = await response.json();
            //console.log(jsonData)
            setWeatherData(jsonData);
        }

        fetchData();
    },[city])
    return (
        <div className="weatherDiv">
            <div className="cityDiv">
                City Chooser
            </div>
            <div className="weatherInfo">
                <div className="currentWeatherDiv">
                    {weatherData!=null ? <Current weatherData={weatherData} /> : <></>}
                </div>
                <div className="forecastDiv">
                    <Forecast />
                </div>
            </div>
            <button className="aboutBtn">About Us</button>

        </div>
    )
}

export default Weather
