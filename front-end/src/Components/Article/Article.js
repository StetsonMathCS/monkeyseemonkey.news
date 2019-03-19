import React from 'react';
import Logo from '../Logo/Logo.js';
import trump from '../Logo/trump.jpg';
import abc from '../Logo/abc.png';
import trump_wall from '../Logo/trump_wall.jpg';
import './Article.css';


const Article = () => {
    return (
        <div className="Grid bg-blue-darkest">
        <center>
            <Logo/>
            <h1 className = "text-green-lighter font-bold pb-5">Donald Trump Declares Border Problems a National Emergency </h1>
            <img src = {trump_wall} alt = "Non-biased image of Trump" width = "500" className = "rounded"/>
            <h1 className = "text-green-lighter font-bold p-5">Your Compiled Article: </h1>
            </center>
            <ul className = "text-white font-mono font-bold padding pb-5 text-xl">
                <li className = "py-2">
                President Trump has declared a nationial emergency regarding the funding of the border-wall between Mexico and the 
                United States
                </li>
                <li className = "py-2">
                There are not statutes that explicitly declare what a 'National Emergency' is
                </li>
                <li className = "py-2">
                To this date, there has been a total of 58 national emergencies declared since 1976
                </li>
                <li className = "py-2">
                Donald Trump can now explicitly cite different pieces of the U.S Code to justify his decision to construct the wall
                </li >
                <li className = "py-2">
                Currently, estimates predict that there is only $2,000,000,000 available to build the wall, however this number
                could be much higher 
                </li>
                <li className = "py-2">
                Trump can use a variety of different sources in the U.S. code to support his actions, including drug defense and
                national defense
                </li>
                <li className = "py-2">
                As president, Trump can declare a National Emergency any time he wants, however there will almost definitely be 
                some legal push back
                </li>
                <li className = "py-2">
                Ultimately, Donald Trump will butt heads with Congress over the timing and financing of the wall
                </li>
            </ul>
            <center>
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
        </center>
        </div>
    );
}

export default Article