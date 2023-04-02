import "./style.css"
import React, {useState, useEffect} from 'react'


const RenderCard = (props) => {
    const {date, day} = props.data

    return(
      <div className="weather-card">
          <h1> <img className="navPoint" src={"https://cdn-icons-png.flaticon.com/512/447/447031.png"}/>{props.city}</h1>
          <p className="condition"><img src={day.condition.icon}/>{day.condition.text}</p>
          <p className="date">{date}</p>
          <p className="maxTemp">{day.maxtemp_c} °C</p>
          <p>Minimum temperature: {day.mintemp_c} °C</p>
          <p>Rain: {day.daily_chance_of_rain}% &emsp; Wind: {day.maxwind_kph}KpH</p>
      </div>
    )
  }
export default RenderCard