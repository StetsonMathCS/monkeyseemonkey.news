import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import trump from '../Logo/trump.jpg';
import abc from '../Logo/abc.png';
import trump_wall from '../Logo/trump_wall.jpg';

const ListItem = () => {
    return (
        <Link to={`/article/:genericarticle`}>
            <div className="max-w-md w-full lg:flex rounded overflow-hidden shadow-lg ">
                <div className="flex items-stretch bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center ">
                <img src = {trump_wall} width = "500" height = "500" className = "rounded"/>
                </div>
                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal container mx-auto bg-blue-darkest">
                    <div className="mb-8 container mx-auto bg-blue-darkest">
                    <div className="font-bold text-xl mb-2 text-center text-white " >Donald Trump Declares Border Problems a National Emergency </div>
                    <p className="text-grey-darker text-base">President Trump has declared a nationial emergency regarding the funding of the border-wall between Mexico and the United States...</p>
                    </div>
                    <div className="flex items-center w-full container mx-auto bg-blue-darkest">
                    <h1><b>SOURCES</b></h1>
                    
                        <div className="text-sm container mx-auto bg-blue-darkest">
                            <p className="text-black leading-none">% Reliability</p>
                            <p className="text-grey-dark">86%</p>
                        </div>
                </div>
                </div>
                </div>
                <br />
        </Link>
    );
}

export default ListItem;