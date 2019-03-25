import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import trump from '../Logo/trump.jpg';
import abc from '../Logo/abc.png';
import trump_wall from '../Logo/trump_wall.jpg';
import trump_wall_card from '../Logo/trump_wall_card.jpg';
import './GridItem.css'

const GridItem = () => {
    return (
        <Link to={`/article/:genericarticle`} className="grid3 hover:border-white bg-blue-darker border-grey-light rounded-lg ">
            <img src = {trump_wall} className = "gridimg rounded-l-lg"/>
            <div className="gridtext grid2">
                <div className="font-bold text-xl mb-2 text-center text-green-lighter pt-5"> why why why why why why whywhywhy why whywhywhywhywhywhywhywhywhywhy</div>
                <div className="text-grey text-base"> goodbye </div>
            </div>
        </Link>
    );
}

export default GridItem;