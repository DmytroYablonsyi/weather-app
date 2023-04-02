import React from "react";
import { Route,HashRouter, Routes as ReactRouterRoutes } from "react-router-dom";
import Navs from "../Navs";
import Astronomy from "../components/astronomy/astronomy-information";
import Forecast from "../components/Forecast/index";

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
                        <Route path="/Astronomy" element={<Astronomy/>}/>
                    </ReactRouterRoutes>
                </div>
            </div>
            </HashRouter>
        </div>
    )
}

export default Routes