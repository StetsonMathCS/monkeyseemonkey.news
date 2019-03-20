import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import trump from '../Logo/trump.jpg';
import abc from '../Logo/abc.png';
import trump_wall from '../Logo/trump_wall.jpg';
import trump_wall_card from '../Logo/trump_wall_card.jpg';

const ListItem = () => {
    return (
        <Link to={`/article/:genericarticle`}>
            <div className="max-w-md w-full lg:flex rounded shadow-lg ">
                <div className="flex items-stretch bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center ">
                <img src = {trump_wall} width = "700" height = "500" className = "rounded"/>
                </div>
                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal container mx-auto bg-blue-darker">
                    <div className="mb-8 container mx-auto bg-blue-darker">
                    <div className="font-bold text-xl mb-2 text-center text-green-lighter" >Donald Trump Declares Border Problems a National Emergency </div>
                    <p className="text-white text-base">President Trump has declared a nationial emergency regarding the funding of the border-wall between Mexico and the United States...</p>
                    </div>
                    <div className="flex items-center w-full container mx-auto bg-blue-darker">
                    <h3 className = "pt-3 pb-5 text-green-lighter font-bold">SOURCES:</h3>
                        <div className="text-sm container mx-auto bg-blue-darker">
                            <p className="mb-2 text-white">abc, Fox News, CNN</p>
                        </div>
                    </div>
                    </div>
                    </div>
                <br />
            <div className="max-w-md w-full lg:flex rounded overflow-hidden shadow-lg ">
            <div className="flex items-stretch bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center ">
            <img src = {trump_wall_card} width = "600" height = "500" className = "rounded"/>
            </div>
                           <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal container mx-auto bg-blue-darker">
                    <div className="mb-8 container mx-auto bg-blue-darker">
                    <div className="font-bold text-xl mb-2 text-center text-green-lighter" >Trump's border wall could impact upstate military sites</div>
                    <p className="text-white text-base">An Air Force research lab at the mothballed Griffiss Air Force Base in Oneida County is facing a $14.2 million loss...</p>
                    </div>
                    <div className="flex items-center w-full container mx-auto bg-blue-darker">
                    <h3 className = "pt-3 pb-5 text-green-lighter font-bold">SOURCES:</h3>
                        <div className="text-sm container mx-auto bg-blue-darker">
                            <p className="mb-2 text-white">PBS, timesunion, CNN, FOX</p>
                        </div>
                </div>
                </div>
                </div>
                <br />
        </Link>
    );
}

export default ListItem;