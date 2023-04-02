import React, {useState, useEffect} from "react";
import RenderCard from "../../weather-card/index";
import "./style.css"
import axios from "axios";
import RenderDefaultCard from "../../defaultData/forecast-default-data"

const Forecast = () => {
    
    const [name, setName] = useState("");
    const [active, setActive] = useState(false);
    const [forecastData, setForecastData] = useState([]);

    const handleName = (e) => {
          return setName(e.target.value)
    }
    
    const getInfo = () => {
         setActive(true);
         async function getForecast () {
            const request = await axios.get('https://weatherapi-com.p.rapidapi.com/forecast.json',
            {params: {q: name, days: '3'},
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_FORECAST_API_KEY,
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }});
            setForecastData(request.data.forecast.forecastday)
        } 
        getForecast()
    }  

    const clearInfo = () => {
            setName("")
            setActive(false);
            setForecastData([])
    }

    return(
    <div>
        <div className="form">
            <input className="input" value={name} onChange={handleName} placeholder={"search"}></input>
            <button onClick={active ? clearInfo : getInfo}>{active ? "Clear" : "Get info"}</button>
        </div>
        <div className="defaultForecast">
                {!active && <RenderDefaultCard/>}
        </div>
        <div className="forecast">
            {
               forecastData.length > 0 && forecastData.map((data) => {
                    return active && <RenderCard data={data} city={name}/> 
                })
            }
        </div>
       
    </div>
    )
}
export default Forecast