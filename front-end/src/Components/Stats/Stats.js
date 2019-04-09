import React from 'react';
import '../ListItem/GridItem.css'
import '../Sources/Sources.css'
import './Stats.css';
import abc from '../Logo/abc.png';
import Logo from '../Logo/Logo.js';
import Search from '../Search/Search.js';

const Stats = () => {

    return (
        <div className = "bg-blue-darkest">
                <center>
                    <Logo />
                    <Search />
                    <h1 className = "text-center text-5xl text-green-lighter font-bold">
                        MSM Stats: 
                    </h1>
                    <h1 className = "text-center text-green-lighter font-bold">
                        Our monkeys have crawled through (AMOUNT) articles this week! 
                    </h1>
                    <h1 className = "text-center text-4xl text-green-lighter font-bold">
                        Average Bias by Publisher: 
                    </h1>
                </center>
                <div className="articleGrid hover:border-blue bg-blue-darker border-r-2 border-b-2 border-l-2 border-t-2 border-blue-darker rounded">
                <h2 className = "text-center text-3xl text-green-lighter font-bold">
                Publisher:
                </h2>
                <h2 className = "text-right text-3xl text-green-lighter font-bold">
                Score:
                </h2>
                </div>
                <div className="articleGrid hover:border-blue bg-blue-darker border-r-2 border-b-2 border-l-2 border-t-2 border-blue-darker rounded align-middle">
                <img src = {abc}></img>
                <div id = "display" className="gridtext grid2">
                <h2 className = "text-right biasScore text-green-lighter font-bold">3</h2>
            </div>
            </div>
            
        </div>
                    );
}

export default Stats;