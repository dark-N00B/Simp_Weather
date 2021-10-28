import React, { useEffect, useState } from 'react';
import './Current.css';






function Current({ weatherData }) {

    const [currentWeather, setCurrentWeather] = useState({
        main : {
            feels_like : 'Loading',
            temp_max : 'Loading',
            temp_min : 'Loading',
        }
    })

    useEffect(() => {
        if (weatherData.main) {
            setCurrentWeather(weatherData);
        }
    },[weatherData])

    //console.log(weatherData)
    return (
        <div className="currentWeatherCard">
            Feels Like : {currentWeather.main.feels_like} <br/>
            Maximum Temp : {currentWeather.main.temp_max} <br/>
            Minimum Temp : {currentWeather.main.temp_min} <br/>
        </div>
    )
}

export default Current;
