import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import './GridItem3.css'


const GridItem3 = () => {
    return (
        <Link to={`/article/:genericarticle`} className="grid hover:border-blue bg-blue-darker border-r-2 border-b-2 border-l-2 border-t-2 border-blue-darker rounded">
            <div id = "display" className="gridtext grid2">
                <h2 id = "positioner" className="font-bold mb-2 text-center text-green-lighter pt-5">We have generated an unbiased article  <br /> that matches your search!</h2>
                <div className="text-grey text-base pt-5">President Trump has declared a nationial emergency regarding the funding of the border-wall between Mexico and the United States...</div>
                <br />
                <p className = "text-white">Reliability Score: 86%</p>
            </div>
            <br />
            <br />
        </Link>
        
    );
}

export default GridItem3;