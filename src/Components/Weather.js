import React from 'react'
import { WiThermometer } from 'react-icons/wi'
import { WiHumidity } from 'react-icons/wi'
import { WiDayWindy } from 'react-icons/wi'
import { WiBarometer } from 'react-icons/wi'
import '../App.css'

const Weather = ({ data }) => {
    return (
        <div>
            <div className='d-flex justify-content-center flex-column  flex-row  m-5'>
                <div className='d-flex justify-content-start my-3'>
                    <div><img style={{ height: '200px', width: '200px' }} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="wthr img" /></div>
                    <div className='fs-1 fw-bold my-5'>{data.weather[0].description}</div>
                </div>

                <div className='d-flex justify-content-start'>
                    <div className='weather-box d-flex lign-items-center flex-column mx-3 p-3'>
                        <WiThermometer style={{ height: '100px', width: '100px' }} />
                        <div className='fs-1 fw-bold'>{Math.round(data.main.temp - 273)}°C</div>
                        <span>Temp</span>
                    </div>

                    <div className='weather-box d-flex lign-items-center flex-column mx-3 p-3'>
                        <WiHumidity style={{ height: '100px', width: '100px' }} />
                        <div className='fs-1 fw-bold'>{data.main.humidity}%</div>
                        <span>Humidity</span>
                    </div>

                    <div className='weather-box d-flex align-items-center flex-column mx-3 p-3'>
                        <WiDayWindy style={{ height: '100px', width: '100px' }} />
                        <div className='fs-1 fw-bold'>{data.wind.speed}m/s</div>
                        <span>Wind</span>
                    </div>

                    <div className='weather-box d-flex align-items-center flex-column mx-3 p-3'>
                        <WiBarometer style={{ height: '100px', width: '100px' }} />
                        <div className='fs-1 fw-bold'>{data.main.pressure}</div>
                        <span>Pressure</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Weather