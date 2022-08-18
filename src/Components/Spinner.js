import React from 'react'
import spineer from '../assets/104.png'
const Spinner = () => {
    return (
        <div className='position-absolute top-50 start-50'>
            <div className='d-flex flex-column'>
                <img src={spineer} alt="spinner" />
                <span>Getting your weather</span>
            </div>
        </div>
    )
}

export default Spinner