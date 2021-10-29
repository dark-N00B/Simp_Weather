import React from 'react';
import './_forecast_helper.css';







function _forecast_helper({ date, temp }) {

    const _date = new Date(date).toLocaleString('en-IN', { weekday: 'short', hour: 'numeric', hour12: true });

    return (
        <div className="helperStyle">
            <div>
                {temp} °C <br/>
            </div>
            <div>
                {_date}
            </div>

        </div>
    )
}

export default _forecast_helper
