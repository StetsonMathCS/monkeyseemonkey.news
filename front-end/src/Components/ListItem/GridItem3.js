import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import trump from '../Logo/trump.jpg';
import abc from '../Logo/abc.png';
import trump_wall from '../Logo/trump_wall.jpg';
import trump_wall_card from '../Logo/trump_wall_card.jpg';
import './GridItem3.css'


const GridItem3 = () => {
    return (
        <Link to={`/article/:genericarticle`} className="grid hover:border-blue bg-blue-darker border-r-2 border-b-2 border-l-2 border-t-2 border-blue-darker rounded">
            <img src = {abc} className = "gridimg rounded-l"/>
            <div id = "display" className="gridtext grid2">
                <h2 id = "positioner" className="font-bold mb-2 text-center text-green-lighter pt-5">We have generated an unbiased article  <br /> that matches your search!</h2>
                <div className="text-grey text-base pt-5">Acting Defense Secretary Patrick Shanahan approved a plan on Monday for the Pentagon to transfer $1 billion towards the construction of 57 miles...</div>
                <br />
                <p className = "text-white">Reliability Score: 86%</p>
            </div>
            <br />
            <br />
        </Link>
        
    );
}

export default GridItem3;