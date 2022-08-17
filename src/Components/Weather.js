import React from 'react'

const Weather = ({data}) => {
    return (
        <div><div className='d-flex align-items-center justify-content-center m-5'>
            <div className='d-flex flex-column'>
                <span><img style={{ height: '100px', width: '100px' }} src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="wthr img" /></span>
                <span>{data.weather[0].description}</span>
            </div>

            <div className='fs-1 fw-bold'>{Math.round(data.main.temp - 273)}°C</div>
        </div></div>
    )
}

export default Weather