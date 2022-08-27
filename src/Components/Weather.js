import React from 'react'
import { WiThermometer } from 'react-icons/wi'
import { WiHumidity } from 'react-icons/wi'
import { WiDayWindy } from 'react-icons/wi'
import { WiBarometer } from 'react-icons/wi'
import moment from 'moment';
import '../App.css'

const Weather = ({ data }) => {
    return (
        <div>
            <div className='d-flex justify-content-center flex-column  m-5'>
                <div className='d-flex justify-content-evenly flex-row my-3'>
                    <div className='fs-1 fw-bold my-5'>{data.name}</div>
                    <div className='d-flex flex-column weather-box'>
                        <img style={{ height: '200px', width: '200px' }} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="wthr img" />
                        <span>{data.weather[0].description}</span>
                    </div>
                    <div className="date-time">
                        <div className="day fs-1 fw-bold my-5">{moment().format('dddd')}</div>
                        <div className="date">{moment().format('LL')}</div>
                    </div>

                </div>

                <div className='d-flex  justify-content-center align-items-center '>
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