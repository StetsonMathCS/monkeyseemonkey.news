import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import './GridItem.css';

const GridItem = ({title, summary}) => {
    return (
        <Link to={`/article/+${title}`} className="grid hover:border-blue bg-blue-darker border-r-2 border-b-2 border-l-2 border-t-2 border-blue-darker rounded">
            <div>
                <div id = "display" className="gridtext grid2">
                    <h2 id = "positioner" className="font-bold mb-2 text-center text-green-lighter pt-5">{`${title + ''}`}</h2>
                    <div className="text-grey text-base pt-5">{`${summary + ''}`}</div>
                </div>
                <br />
                <br />
            </div>
        </Link>
    );
}

export default GridItem;