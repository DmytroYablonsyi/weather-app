import React from "react";
import { Route,HashRouter, Routes as ReactRouterRoutes } from "react-router-dom";
import Navs from "../Navs";
import AirQuality from "../components/astronomy/astronomy-information";
import Forecast from "../components/Forecast/forecast-page";

const Routes = () => {
    return(
        <div>
            <HashRouter>
            <div>
                <header>
                    <Navs/>
                </header>
                <div>
                    <ReactRouterRoutes>
                        <Route path="/" element={<Forecast/>}/>
                        <Route path="/Air Quality" element={<AirQuality/>}/>
                    </ReactRouterRoutes>
                </div>
            </div>
            </HashRouter>
        </div>
    )
}

export default Routes