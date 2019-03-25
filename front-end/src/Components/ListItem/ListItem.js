import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import trump from '../Logo/trump.jpg';
import abc from '../Logo/abc.png';
import trump_wall from '../Logo/trump_wall.jpg';
import trump_wall_card from '../Logo/trump_wall_card.jpg';

const ListItem = () => {
    return (
        <Link to={`/article/:genericarticle`}>
            <div className="max-w-md lg:flex">
                <div>
                <img src = {trump_wall}  height = "auto" width = "auto" className = "w-full block rounded-b rounded-l border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light"/>
                </div>
                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal container mx-auto bg-blue-darker">
                    <div className="mb-8 container mx-auto bg-blue-darker">
                    <div className="font-bold text-xl mb-2 text-center text-green-lighter" >Donald Trump Declares Border Problems a National Emergency </div>
                    <div>
                    <p className="text-white text-base">President Trump adsfhas declared a nationial emergency regarding the funding of the border-wall between...</p>
                    </div>
                    </div>
                    </div>
                    </div>
                <br />
            <div className="max-w-md lg:flex">
            <div className>
            <img src = {trump_wall_card} height = "auto" width = "auto" className = "w-full block rounded-b rounded-l border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light"/>
            </div>
                           <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-blue-darker">
                    <div className="mb-8 container mx-auto bg-blue-darker">
                    <div className="font-bold text-xl mb-2 text-center text-green-lighter" >Trump's border wall could impact upstate military sites</div>
                    <div height = "auto">                    
                    <p className="text-white text-base">An Air Force research lab at the mothballed Griffiss Air Force Base in Oneida County is facing a $14.2...</p>
                    </div>
                    </div>
                </div>
                </div>
                <br />
        </Link>
    );
}

export default ListItem;