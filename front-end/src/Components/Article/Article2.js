import React from 'react';
import Logo from '../Logo/Logo.js';
import trump from '../Logo/trump.jpg';
import abc from '../Logo/abc.png';
import trump_wall from '../Logo/trump_wall.jpg';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
//npm install react-html-parser

const Article = () => {
    var fakeData = require('../Article/fakedata.json');
    var myTitle = fakeData.name;
    var myDate = fakeData.date;
    var myStory = fakeData.story;
    var mySource = fakeData.source;
    var myRating = fakeData.rating;
    return (

        <div className="container mx-auto bg-black">
        <center>  
        <Logo/>
        <h1 className = "text-green-lighter font-bold">{ReactHtmlParser(myTitle)}</h1>
        <br />
        <br />
        <img src = {trump_wall} alt = "Non-biased image of Trump" width = "500" className = "rounded"/>
        <br />
        <br />
        <br />
        <h1 className = "text-green-lighter font-bold">{ReactHtmlParser(myDate)}</h1>
        </center> 
        <p className = "text-white font-mono font-bold pl-32 text-xl">
        {ReactHtmlParser(myStory)}
        </p>
        <br></br>
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
                    <p className="text-grey-darker text-base">{ReactHtmlParser(mySource)}</p>
                    </div>
                    <div className="flex items-center w-full">
                    <img className="w-10 h-10 rounded-full mr-4" src = {abc}/>
                    
                        <div className="text-sm">
                            <p className="text-black leading-none"> Reliability</p>
                            <p className="text-grey-dark">{ReactHtmlParser(myRating)} %</p>
                        </div>
                </div>
                </div>
                </div>
        </center>
        <br />
        <br />
        <br />
        </div>
           
        
    );
}

export default Article