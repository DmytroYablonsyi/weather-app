import "./style.css"
import React, {useState, useEffect} from 'react'
import axios from "axios";


const RenderCard = (props) => {

    const [city, setCity] = useState("");
    const [maxTemp, setMaxTemp] = useState("");
    const [minTemp, setMinTemp] = useState("");
    const [rainChance, setRainChance] = useState("");
    const [windCondition, setWindCondition] = useState("");
    const [condition, setCondition] = useState("");
    const [date, setDate] = useState("");


    useEffect(() => {
      async function getForecast () {
        const request = await axios.get('https://weatherapi-com.p.rapidapi.com/forecast.json',
        {params: {q: props.cityName, days: '3'},
        headers: {
          'X-RapidAPI-Key': 'fdbd7e888emsh0f689d046ac2f4ap192a47jsnc8145614a1e7',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }});
        setMaxTemp(request.data.forecast.forecastday[props.fd].day.maxtemp_c);
        setMinTemp(request.data.forecast.forecastday[props.fd].day.mintemp_c);
        setWindCondition(request.data.forecast.forecastday[props.fd].day.maxwind_kph);
        setCondition(request.data.forecast.forecastday[props.fd].day.condition.text);
        setRainChance(request.data.forecast.forecastday[props.fd].day.daily_chance_of_rain);
        setCity(request.data.location.name)
        setDate(request.data.forecast.forecastday[props.fd].date)
    } 
    getForecast()
    },[])  

    return(
      <div className="weather-card">
          <h1> {city}</h1>
          <p className="date">{date}</p>
          <p>Maximum temperature: {maxTemp} °C</p>
          <p>Minimum temperature: {minTemp} °C</p>
          <p>Chance of rain: {rainChance}</p>
          <p>Wind: {windCondition}KpH</p>
          <p>{condition}</p>
      </div>
    )
  }
export default RenderCard