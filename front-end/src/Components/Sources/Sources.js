import React from 'react';
import abc from '../Logo/abc.png';
import trump_wall from '../Logo/trump_wall.jpg';
import sourceScore from './SourceScore.png';
import score from './Score.jpg';
import './Sources.css';
import '../ListItem/GridItem.css'
import Logo from '../Logo/Logo.js'
import Search from '../Search/Search.js'


const Sources = () => {

    return (
        <div className = "bg-blue-darkest">
                <center>
                    <Logo />
                    <Search />
                    <h1 className = "text-center text-5xl text-green-lighter font-bold">
                        Publisher: 
                    </h1>
                </center>
            <div className = "gridding">
                    <div className = "topLogo">
                        <img src={abc} className = "topLogo"/>
                    </div>
                    <div className = "scoreText">
                        <h1 className = "text-center text-3xl text-green-lighter font-bold">
                            Average Bias Rating:
                        </h1>
                    </div>
                    <div className = "sourceScore">
                        <img src={sourceScore} ></img>
                    </div>
                    <div className = "recentArticlesText">
                    <h1 className = "text-center text-4xl text-green-lighter font-bold">
                            Recent Articles From ABC:
                    </h1>
                    </div>
            </div>
            <div className="articleGrid hover:border-blue bg-blue-darker border-r-2 border-b-2 border-l-2 border-t-2 border-blue-darker rounded">
            <div id = "display" className="gridtext grid2">
                <h2 id = "positioner" className="font-bold mb-2 text-center text-green-lighter pt-5">Donald Trump Declares Border <br /> Problems a National Emergency</h2>
                <div className="text-grey text-base pt-5">President Trump has declared a nationial emergency regarding the funding of the border-wall between Mexico and the United States...</div>
            </div>
            <div className = "articleScore">
                <img src = {score}></img>
            </div>
            </div>
            <div className="articleGrid hover:border-blue bg-blue-darker border-r-2 border-b-2 border-l-2 border-t-2 border-blue-darker rounded">
            
            <div id = "display" className="gridtext grid2">
            <h2 id = "positioner" className="font-bold mb-2 text-center text-green-lighter pt-5">Trump's border wall could impact <br />upstate military sites</h2>
                <div className="text-grey text-base pt-5">WASHINGTON — A handful of military sites in upstate New York could be impacted if President Donald J. Trump’s plan to divert Pentagon construction funds...</div>
            </div>
            <div className = "articleScore">
                <img src = {score}></img>
            </div>
            </div>
        </div>
    );
}

export default Sources;