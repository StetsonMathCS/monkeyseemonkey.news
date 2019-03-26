import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import trump from '../Logo/trump.jpg';
import abc from '../Logo/abc.png';
import trump_wall from '../Logo/trump_wall.jpg';
import trump_wall_card from '../Logo/trump_wall_card.jpg';
import './GridItem.css'

const GridItem = () => {
    return (
        <Link to={`/article/:genericarticle`} className="grid hover:border-blue bg-blue-darker border-r-2 border-b-2 border-l-2 border-t-2 border-blue-darker rounded">
            <img src = {trump_wall} className = "gridimg rounded-l"/>
            <div id = "display" className="gridtext grid2">
                <h2 id = "positioner" className="font-bold mb-2 text-center text-green-lighter pt-5">Donald Trump Declares Border <br /> Problems a National Emergency</h2>
                <div className="text-grey text-base pt-5">President Trump has declared a nationial emergency regarding the funding of the border-wall between Mexico and the United States...</div>
            </div>
            <br />
            <br />
        </Link>
        
    );
}

export default GridItem;