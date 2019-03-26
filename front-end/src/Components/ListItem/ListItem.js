import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import trump from '../Logo/trump.jpg';
import abc from '../Logo/abc.png';
import trump_wall from '../Logo/trump_wall.jpg';
import trump_wall_card from '../Logo/trump_wall_card.jpg';

const ListItem = () => {
    return (
        <Link to={`/article/:genericarticle`}>
            <div className="max-w-md h-14 lg:flex">
                    <div >
                    <img src = {abc} className = "rounded-l border-r border-b border-l border-grey-light lg:border-l lg:border-t lg:border-grey-light"/>
                    </div>
                    <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-blue-darker">
                        <div className>
                            
                            <p className="text-grey-darker text-base">We found an article from ABC that passes our reliability metrics! If you are 
                            looking for some reliable news, this article would be a good place to start!</p>
                        </div>
                        <div className="flex items-center">
                            
                            
                        </div>
                    </div>
                </div>
                <br />
                <div className="max-w-md lg:flex">
                    <div>
                    <img src = {trump_wall_card} className = "rounded-l border-r border-b border-l border-grey-light lg:border-l lg:border-t lg:border-grey-light h-14"/>
                    </div>
                    <div max-height = "auto" className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-blue-darker">
                        <div className>
                            <h1 className = "text_green-ligther">Donald Trump is a Dickhead</h1>
                            <p className="text-white text-base">We found an article from ABC that passes our reliability metrics! If you are 
                            looking for some reliable news, this article would be a good place to start!</p>
                        </div>
                        <div className="flex items-center w-full">
                            
                        </div>
                    </div>
                </div>
                <br />
        </Link>
    );
}

export default ListItem;