import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import trump from '../Logo/trump.jpg';
import abc from '../Logo/abc.png';

const ListItem = () => {
    return (
        <Link to={`/article/:genericarticle`}>
            <div className="max-w-md w-full lg:flex rounded">
                <div className="flex items-stretch bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center">
                <img src = {trump} width = "800" height = "500" className = "rounded"/>
                </div>
                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                    <p className="text-sm text-grey-dark flex items-center">
                        
                    </p>
                    <div className="text-black font-bold text-xl mb-2">Our Closest Match!</div>
                    <p className="text-grey-darker text-base">We found an article from ABC that passes our reliability metrics! If you are 
                    looking for some reliable news, this article would be a good place to start!</p>
                    </div>
                    <div className="flex items-center w-full">
                    <img className="w-10 h-10 rounded-full mr-4" src = {abc}/>
                    
                        <div className="text-sm">
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