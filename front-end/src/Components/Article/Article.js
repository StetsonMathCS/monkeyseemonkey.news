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
            <h1 className = "text-green-lighter font-bold">Your Compiled Article: </h1>
            <br />
            <br />
            <br />
            </center>
            <ul className = "text-white font-mono font-bold pl-32 text-xl">
                <li>
                President Trump has declared a nationial emergency regarding the funding of the border-wall between Mexico and the 
                United States
                </li>
                <br />
                <li>
                There are not statutes that explicitly declare what a 'National Emergency' is
                </li>
                <br />
                <li>
                To this date, there has been a total of 58 national emergencies declared since 1976
                </li>
                <br />
                <li>
                Donald Trump can now explicitly cite different pieces of the U.S Code to justify his decision to construct the wall
                </li>
                <br />
                <li>
                Currently, estimates predict that there is only $2,000,000,000 available to build the wall, however this number
                could be much higher 
                </li>
                <br />
                <li>
                Trump can use a variety of different sources in the U.S. code to support his actions, including drug defense and
                national defense
                </li>
                <br />
                <li>
                As president, Trump can declare a National Emergency any time he wants, however there will almost definitely be 
                some legal push back
                </li>
                <br />
                <li>
                Ultimately, Donald Trump will butt heads with Congress over the timing and financing of the wall
                </li>
                <br />
            </ul>
            <br />
            <center>
                
            </center>
        
        </div>
    );
}

export default Article