import React from 'react';
import Logo from '../Logo/Logo';
import trump from '../Logo/trump.jpg';

const Article = () => {
    return (
        <div className="container mx-auto bg-black">
        <center>
            <Logo/>
            <h1 className = "text-green-lighter font-bold">Donald Trump Declares Border Problems a National Emergency </h1>
            <br />
            <br />
            <img src = {trump} alt = "Non-biased image of Trump" height = "600" width = "800" />
            <br />
            <br />
            <br />
            </center>
            <ul className = "text-white font-mono font-bold pl-32 text-xl">
                <li>
                President Trump has declared a nationial emergency regarding the funding of the border-wall between Mexico and the 
                United States
                </li>
            </ul>
        
        </div>
    );
}

export default Article