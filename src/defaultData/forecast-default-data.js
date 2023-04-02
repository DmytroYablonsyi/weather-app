import "./style.css"
import React, {useState, useEffect} from 'react'
import axios from "axios";

const RenderDefaultCard = () => {

    const [forecastData, setForecastData] = useState([]);
useEffect(() => {
   async function getForecast () {
         const request = await axios.get('https://weatherapi-com.p.rapidapi.com/forecast.json',
         {params: {q: "Lviv", days: '3'},
         headers: {
           'X-RapidAPI-Key': process.env.REACT_APP_FORECAST_API_KEY,
           'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
         }});
         setForecastData(request.data.forecast.forecastday)
     } 
     getForecast()
 
},[])
     
    return(
      <div>{forecastData.length > 0 && forecastData.map((data) => {
                 return   <div className="weather-cards">
                                <div>
                                      <h1> <img className="navPoint" src={"https://cdn-icons-png.flaticon.com/512/447/447031.png"}/>Lviv</h1>
                                      <p className="condition"><img src={data.day.condition.icon}/>{data.day.condition.text}</p>
                                      <p className="maxTemp">{data.day.maxtemp_c} °C</p>
                                      <p>Minimum temperature: {data.day.mintemp_c} °C</p>
                                      <p>Rain: {data.day.daily_chance_of_rain}% &emsp; Wind: {data.day.maxwind_kph}KpH</p> 
                                </div>
                                <div className="astro-card">
                                    <p className="moon_phase">moon_phase: {data.astro.moon_phase}</p>
                                    <p className="moonrise">moonrise: {data.astro.moonrise}</p>
                                    <p className="moonset">moonset: {data.astro.moonset}</p>
                                    <p className="sunrise">sunrise: {data.astro.sunrise}</p>
                                    <p className="sunset">sunset: {data.astro.sunset}</p>
                                </div>
                          </div>
      })}
      </div>
    )
  }
export default RenderDefaultCard