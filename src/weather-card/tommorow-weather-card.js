import React, {useCallback, useState } from "react";
import axios from "axios";
import RenderCard from "../weather-card/render-weather-card";


const RenderTomorrowCard = (props) => {
    
    const [city, setCity] = useState("");
    const [maxTemp, setMaxTemp] = useState("");
    const [minTemp, setMinTemp] = useState("");
    const [rainChance, setRainChance] = useState("");
    const [windCondition, setWindCondition] = useState("");
    const [condition, setCondition] = useState("");
    const [active, setActive] = useState(false);
    const [date, setDate] = useState("")
    
    const getForecast = useCallback(async () => {
          const request = await axios.get('https://weatherapi-com.p.rapidapi.com/forecast.json',
          {params: {q: props.name, days: '3'},
          headers: {
            'X-RapidAPI-Key': 'fdbd7e888emsh0f689d046ac2f4ap192a47jsnc8145614a1e7',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
          }});
          setMaxTemp(request.data.forecast.forecastday[1].day.maxtemp_c);
          setMinTemp(request.data.forecast.forecastday[1].day.mintemp_c);
          setWindCondition(request.data.forecast.forecastday[1].day.maxwind_kph);
          setCondition(request.data.forecast.forecastday[1].day.condition.text);
          setRainChance(request.data.forecast.forecastday[1].day.daily_chance_of_rain);
          setCity(request.data.location.name)
          setDate(request.data.forecast.forecastday[1].date)
          setActive(true)
          console.log(request.data)
          console.log([ maxTemp, minTemp, rainChance, windCondition, condition])
    })
    getForecast()
    return(
        <>
            <div>{active && <RenderCard city={city} 
                              maxTemp={maxTemp} 
                              minTemp={minTemp} 
                              rainChance={rainChance} 
                              windCondition={windCondition} 
                              condition={condition}
                              date={date} />}</div>
        </>
        )
}
  export default RenderTomorrowCard