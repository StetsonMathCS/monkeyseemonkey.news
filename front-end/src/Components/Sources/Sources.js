import React from 'react';
import abc from '../Logo/abc.png';
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
                        <img src={abc} alt = "ABC" className = "topLogo"/>
                    </div>
                    <div className = "scoreText">
                        <h1 className = "averageBias text-center text-3xl text-green-lighter font-bold">
                            Average Bias Rating:
                        </h1>
                    </div>
                    <div>
                        <h1 className = "score text-green-lighter font-bold">4.0</h1>
                    </div>
            </div>
            <p className = "text-white text-center font-mono">Our bias rating (1 --> Least Biased, 9 --> Most Biased) is derived through
                our AI technologies <br /> that parse any articles from a specified source. The final 
                bias score is derived by taking <br /> the average of all of the scores from recent articles
                of the selected publisher.
            </p>
            <h1 className = "text-center text-green-lighter">Recent Articles from this Publisher: </h1>
            <h3 className = "text-center text-green-lighter">(2 Articles this Past Week)</h3>
            <br />
            <div className="articleGrid hover:border-blue bg-blue-darker border-r-2 border-b-2 border-l-2 border-t-2 border-blue-darker rounded">
            <div id = "display" className="gridtext grid2">
                <h2 id = "positioner" className="font-bold mb-2 text-center text-green-lighter pt-5">Donald Trump Declares Border <br /> Problems a National Emergency</h2>
                <div className="text-grey text-base pt-5">President Trump has declared a nationial emergency regarding the funding of the border-wall between Mexico and the United States...</div>
                <br />
                <center><p className = "text-white">Bias Score: 3</p></center>
            </div>
            </div>
            <div className="articleGrid hover:border-blue bg-blue-darker border-r-2 border-b-2 border-l-2 border-t-2 border-blue-darker rounded">
            <div id = "display" className="gridtext grid2">
            <h2 id = "positioner" className="font-bold mb-2 text-center text-green-lighter pt-5">Trump's border wall could impact <br />upstate military sites</h2>
                <div className="text-grey text-base pt-5">WASHINGTON — A handful of military sites in upstate New York could be impacted if President Donald J. Trump’s plan to divert Pentagon construction funds...</div>
                <br />
                <center><p className = "text-white">Bias score: 5</p></center>
            </div>
            </div>
            <br />
        </div>
    );
}

export default Sources;