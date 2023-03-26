import React, {useState, useCallback } from "react";
import axios from "axios";
// import RenderAfterTomorrowCard from "../../weather-card/after-tommorow-weather-card";
// import RenderTodayCard from "../../weather-card/today-weather-card";
// import RenderTomorrowCard from "../../weather-card/tommorow-weather-card";
import RenderCard,{getForecast} from "../../render-card/render-weather-card";
import "./forecast.css"



const Forecast = () => {
    
    const [name, setName] = useState("");
   
    const [active, setActive] = useState(false);

    const handleName = (e) => {
          return setName(e.target.value)
    }
    
    const getInfo = () => {
        return  setActive(true) 
    }

    const clearInfo = () => {
        setName("")
        return setActive(false)
    }
    return(
    <div>
            <h1>MANAGE YOUR DAY</h1>
            <h2>WHERE ARE YOU FROM?</h2>
        <div className="form">
                <input className="input" value={name} onChange={handleName} ></input>
                <button onClick={active ? clearInfo : getInfo}>{active ? "Clear" : "Get info"}</button>
        </div>
                
        <div className="forecast">
            <div>
                {active && <RenderCard fd={0} cityName={name} />}
            </div> 
            <div>
                {active && <RenderCard fd={1} cityName={name} />}
            </div> 
            <div>
                {active && <RenderCard fd={2} cityName={name} />}
            </div>
        </div>
       
    </div>
    )
}
export default Forecast