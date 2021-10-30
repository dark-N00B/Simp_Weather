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

    /*function skyImage(sky) {
        if (sky === 'Haze') return { backgroundImage: `url("https://c.tenor.com/__gznbyGLKYAAAAC/travel-rain.gif")` }

    }

    console.log(skyImage('Haze'))*/

    return (
        <>
            <div className="forecastCard">
                {forecastData == null ? <></> :
                    <>
                        {forecastData.map((item, key) => {
                            return (
                                <div className="forecastDays" /*style={skyImage(item.weather[0].main)}*/ key={key}>
                                    <Helper temp={item.main.temp} date={item.dt_txt} sky={item.weather[0].description} />
                                </div>
                            )
                        })}
                    </>
                }

            </div>
            <div className="forecastHeader">
                <h3>5 Days Forecast</h3>
            </div>
        </>
    )
}

export default Forecast
