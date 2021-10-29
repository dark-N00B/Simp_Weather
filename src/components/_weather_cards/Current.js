import React, { useEffect, useState } from 'react';
import API_KEY from '../../API_KEY';
import './Current.css';




function Current({ city }) {

    const [weatherData, setWeatherData] = useState(null);

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
        <div className="currentWeatherCard">
            <h2>Feels Like</h2>
            <div className="feel">{/*Feels Like : */}{weatherData != null ? weatherData.main.feels_like : "--.--"}°C </div><br/>
            Maximum Temp : {weatherData != null ? weatherData.main.temp_max : "--.--"} °C <br/>
            Minimum Temp : {weatherData != null ? weatherData.main.temp_min : "--.--"} °C <br/>
        </div>
    )
}

export default Current;
