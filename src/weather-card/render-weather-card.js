import "./style.css"

const RenderCard = (props) => {
    return(
      <div className="weather-card">
          <h1> {props.city}</h1>
          <p className="date">{props.date}</p>
          <p>Maximum temperature: {props.maxTemp} °C</p>
          <p>Minimum temperature: {props.minTemp} °C</p>
          <p>Chance of rain: {props.rainChance}</p>
          <p>Wind: {props.windCondition}KpH</p>
          <p>{props.condition}</p>
      </div>
    )
  }

  export default RenderCard