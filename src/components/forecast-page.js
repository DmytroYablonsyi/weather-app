import React, {useState } from "react";
import RenderAfterTomorrowCard from "../weather-card/after-tommorow-weather-card";
import RenderTodayCard from "../weather-card/today-weather-card";
import RenderTomorrowCard from "../weather-card/tommorow-weather-card";
import "./forecast.css"


const Forecast = () => {
    
    // const [name, setName] = useState("");
    // const [city, setCity] = useState("");
    // const [maxTemp, setMaxTemp] = useState("");
    // const [minTemp, setMinTemp] = useState("");
    // const [rainChance, setRainChance] = useState("");
    // const [windCondition, setWindCondition] = useState("");
    // const [condition, setCondition] = useState("");
    // const [active, setActive] = useState(false);
    // const [date, setDate] = useState("")

    // const handleName = (e) => {
    //     return setName(e.target.value)
    // }
    
    // const getForecast = useCallback(async () => {
    //       const request = await axios.get('https://weatherapi-com.p.rapidapi.com/forecast.json',
    //       {params: {q: name, days: '3'},
    //       headers: {
    //         'X-RapidAPI-Key': 'fdbd7e888emsh0f689d046ac2f4ap192a47jsnc8145614a1e7',
    //         'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    //       }});
    //       setMaxTemp(request.data.forecast.forecastday[1].day.maxtemp_c);
    //       setMinTemp(request.data.forecast.forecastday[1].day.mintemp_c);
    //       setWindCondition(request.data.forecast.forecastday[1].day.maxwind_kph);
    //       setCondition(request.data.forecast.forecastday[1].day.condition.text);
    //       setRainChance(request.data.forecast.forecastday[1].day.daily_chance_of_rain);
    //       setCity(request.data.location.name)
    //       setDate(request.data.forecast.forecastday[1].date)
    //       setActive(true)
    //       console.log(request.data)
    //       console.log([name, maxTemp, minTemp, rainChance, windCondition, condition])
    // })
    const [name, setName] = useState("");

    const handleName = (e) => {

      return setName(e.target.value)
  }
    return(
    <div>
        <h1>MANAGE YOUR DAY</h1>
        <h2>WHERE ARE YOU FROM?</h2>
        <div className="form">
            <input className="input" value={name} onChange={handleName} ></input>
        </div>
        <div className="forecast">
              <div><RenderTodayCard name={name}/></div>
              <div><RenderTomorrowCard name={name}/></div>
              <div><RenderAfterTomorrowCard name={name}/></div>
        </div>
    </div>
    )
}
export default Forecast