import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

const Navs = () => {
    return(
        <>
        <header className="header">
            <Link to="/">Forecast</Link>
            <Link to="/Astronomy">Astronomy</Link>
        </header>
        </>
    )
}

export default Navs
