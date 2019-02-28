import React from 'react';
import Logo from '../Logo/Logo';
import trump from '../Logo/trump.jpg';

const Article = () => {
    return (
        <div className="container mx-auto bg-black">
        <center>
            <Logo/>
            <h1 className = "text-white font-mono">Your Bias-free Article Compilation: </h1>
            <img src = {trump} alt = "Non-biased image of Trump" />
        </center>
        </div>
    );
}

export default Article