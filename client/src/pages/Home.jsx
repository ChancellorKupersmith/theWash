import React from "react";

import './Home.css'
import logoPng from "../assets/theWash-logo.png"

const Home = () => {
    return(
        <div className="splash-view container">
            <img className="splash-logo" src={logoPng} alt="the wash logo"/>
        </div>
    );
};

export default Home;