import "./style.css"
import React, {useState, useEffect} from 'react'


const RenderAstroCard = (props) => {
    const {date, astro} = props.data

    return(
      <div className="astro-card">
          <p className="moon_phase">moon_phase{astro.moon_phase}</p>
          <p className="moonrise">moonrise{astro.moonrise}</p>
          <p className="moonset">moonset{astro.moonset}</p>
          <p className="sunrise">sunrise{astro.sunrise}</p>
          <p className="sunset">sunset{astro.sunset}</p>
      </div>
    )
  }
export default RenderAstroCard