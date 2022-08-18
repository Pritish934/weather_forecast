import React, { useEffect, useState } from 'react'
import spineer from '../assets/104.png'
import Weather from './Weather'

const Search = () => {
    const [search, setSearch] = useState("")
    const [city, setCity] = useState("Kolkata")
    const [data, setData] = useState()
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = async(e) => {
        e.preventDefault()
        setCity(search)
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=afce546c7f1ad0c010e89bf69310431f`)
        const main_data = await data.json()
        setData(main_data)
        console.log(city)
    }
    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude)
                setLon(position.coords.longitude)
            })
            // const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=afce546c7f1ad0c010e89bf69310431f`)
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=afce546c7f1ad0c010e89bf69310431f`)
            const main_data = await data.json()
            setData(main_data)
            console.log(main_data)
            console.log(lat, lon)
        }
        fetchData()
    }, [lat, lon])

    return (
        <div className='w-100'>
            {(typeof data != 'undefined' && data.cod == 200) ? (
                <div>
                    <form className="d-flex m-5" role="search">
                        <input className="form-control me-2" onChange={handleChange} value={search} type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={handleSearch} className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    <Weather data={data} />
                </div>
            ) : (
                <div className='w-auto h-auto'>
                    <div className='d-flex justify-content-center align-itmes-center'><img src={spineer} alt="spinner"/></div>
                </div>
            )}

        </div>
    )
}

export default Search