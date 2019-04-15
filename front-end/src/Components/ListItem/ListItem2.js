import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import trump_wall_card from '../Logo/trump_wall_card.jpg';

const ListItem2 = (key, title, description, image) => {
    return (
        <Link to={`/article/${String(title).split("+").join(" ")}`}>
            <div className="max-w-md lg:flex">
            <div className>
            <img src = {trump_wall_card} max-height = "auto" className = "rounded-l border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light"/>
            </div>
                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-blue-darker">
                    <div className="mb-8 container mx-auto bg-blue-darker">
                    <div className="font-bold text-xl mb-2 text-center text-green-lighter">Trump's border wall could impact upstate military sites</div>
                    <div height = "auto">                    
                    <p className="text-white text-base">{String(description)}</p>
                    </div>
                    </div>
                </div>
                </div>
                <br />
        </Link>
    );
}

export default ListItem2;