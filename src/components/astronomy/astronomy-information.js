import axios from "axios";
import React, { useState } from "react";
import "./astronomy.css"
import RenderAstroCard from "../../astro-card/index"
const Astronomy = () => {
    const [name, setName] = useState("");
    const [active, setActive] = useState(false);
    const [forecastData, setForecastData] = useState([]);
        const getInfo = () => {
            setActive(true);
            async function getAstroForecast () {
               const request = await axios.get('https://weatherapi-com.p.rapidapi.com/forecast.json',
               {params: {q: "Lviv", days: '3'},
               headers: {
                 'X-RapidAPI-Key': process.env.REACT_APP_FORECAST_API_KEY,
                 'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
               }});
           console.log(request.data.forecast.forecastday)
           setForecastData(request.data.forecast.forecastday)
           } 
           getAstroForecast()
       }
       const clearInfo = () => {
        setName("")
        setActive(false);
        setForecastData([])
}
    return(
        <>
        <p>astronomy</p>
        <button onClick={active ? clearInfo : getInfo}>{active ? "Clear" : "Get info"}</button>
        <div className="container">{ forecastData.length > 0 && forecastData.map((data) => {
                    return active && <RenderAstroCard data={data} city={name}/>
                })}</div>
        </>
    )
}

export default Astronomy