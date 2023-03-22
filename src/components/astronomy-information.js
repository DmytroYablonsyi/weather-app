import axios from "axios";
import React, { useCallback } from "react";
import "./astronomy.css"

const AirQuality = () => {
    const getAirQuality = useCallback(() => {

        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/astronomy.json',
            params: {q: 'London'},
            headers: {
              'X-RapidAPI-Key': 'fdbd7e888emsh0f689d046ac2f4ap192a47jsnc8145614a1e7',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    })
    return(
        <div className="container">
        <p>astronomy</p>
        <button onClick={getAirQuality}>GET</button>
        <div>{}</div>
        </div>
    )
}

export default AirQuality