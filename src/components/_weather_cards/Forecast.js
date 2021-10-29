import React, { useEffect, useState } from 'react';
import API_KEY from '../../API_KEY';
import './Forecast.css'
import Helper from './_forecast_helper';







function Forecast({ city }) {

    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonData = await response.json();
            const fiveDay = jsonData.list;
            //console.log(jsonData);
            //console.log(fiveDay);
            setForecastData(fiveDay);
        }

        fetchData();
    }, [city])

    return (
        <div className="forecastCard">
            {forecastData == null ? <></> :
                <>
                    {forecastData.map((item, key) => {
                        return (
                            <div className="forecastDays" key={key}>
                                <Helper temp={item.main.temp} date={item.dt_txt}/>
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default Forecast
