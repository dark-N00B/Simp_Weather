import React, { useState, useEffect } from 'react';
import API_KEY from '../API_KEY';




function Weather() {

    const [weatherData, setWeatherData] = useState([]);
    const [city, setCity] = useState('Delhi');

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const jsonData = await response.json();
            console.log(jsonData)
            setWeatherData(jsonData);
        }

        fetchData();
    },[])
    return (
        <div>
            
        </div>
    )
}

export default Weather
