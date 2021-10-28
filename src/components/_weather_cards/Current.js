import React from 'react';
import './Current.css';




function Current({ weatherData }) {
    

    return (
        <div className="currentWeatherCard">
            Feels Like : {weatherData.main.feels_like} <br/>
            Maximum Temp : {weatherData.main.temp_max} <br/>
            Minimum Temp : {weatherData.main.temp_min} <br/>
        </div>
    )
}

export default Current;
