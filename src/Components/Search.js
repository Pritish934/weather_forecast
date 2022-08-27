import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'

import Weather from './Weather'

const Search = () => {
    const [city, setCity] = useState("")
    const [data, setData] = useState()
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])
    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const handleSearch = async(e) => {
        e.preventDefault()
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=afce546c7f1ad0c010e89bf69310431f`)
        const main_data = await data.json()
        setData(main_data)
    }
    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude)
                setLon(position.coords.longitude)
            })
            
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=afce546c7f1ad0c010e89bf69310431f`)
            const main_data = await data.json()
            setData(main_data)

        }
        fetchData()
    }, [lat, lon])

    return (
        <div className='w-100 p-3' style={{backgroundImage:`url("https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=767&q=80")`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            {(typeof data != 'undefined' && data.cod == 200) ? (
                <div>
                    <form className="d-flex m-5" role="search">
                        <input className="form-control me-2" onChange={handleChange} value={city} type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={handleSearch} className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    <Weather data={data} />
                </div>
            ) : (
                    <Spinner/>
                    
            )}

        </div>
    )
}

export default Search