import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import './GridItem.css'

const GridItem2 = () => {
    return (
        <Link to={`/article/:genericarticle`} className="grid hover:border-white bg-blue-darker border-r-2 border-b-2 border-l-2 border-t-2 border-blue-darker hover:border-blue rounded">
            
            <div id = "display" className="gridtext grid2">
                <h2 id = "positioner" className="font-bold mb-2 text-center text-green-lighter pt-5">Trump's border wall could impact upstate military sites</h2>
                <div className="text-grey text-base pt-5">WASHINGTON — A handful of military sites in upstate New York could be impacted if President Donald J. Trump’s plan to divert Pentagon construction funds...</div>
            </div>
            <br />
            <br />
        </Link>
        
    );
}

export default GridItem2;