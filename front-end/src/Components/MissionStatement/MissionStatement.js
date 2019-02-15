import React from 'react';
import Logo from '../Logo/Logo.png'
import map from '../Logo/map.png'
console.log(map);
console.log(Logo);
const MissionStatement = () => {
    return (
        
       <div className = "container mx-auto bg-black" >
            
           <center>
            <img src={Logo} alt="Temp Logo"></img>
            <p className = "text-white"><center>(The logo will be a link to the home page in the final product)</center></p>
           <h1 className = "text-5xl font-bold text-indigo-dark">About US</h1>
           <br />
           <br />
           </center> 
           <h1 className = "text-green-lighter font-bold"><center>Our Mission Statement</center></h1>
           <br />
           <center>
            <p className = "text-white font-mono">Here at Monkeyseemonkey.news, we believe that everybody should have consistent access to reliable<br />
                and trustworthy news sources. As part of our software model, we deploy Artificial Intelligence to crawl <br />
                the web and filter out any bias that we so commonly see in our modern news sources. We have no prejudice, <br />
                and our goal is to provide our users with 100% accuracy in regards to their news searches.
            </p>
            <br />
            <h1 className = "text-green-lighter font-bold"><center>How does this service work?</center></h1>
            <br />
            <p className = "text-white font-mono">User uses our search bar on the home page to search for a news query</p>
            <br />
            <img src = {map} height = "42" width = "30" alt = "arrow"></img>
            <br />
            <p className = "text-white font-mono">Our application crawls the web for all of the top news stories on the subject</p>
            <br />
            <img src = {map} height = "42" width = "30" alt = "arrow"></img>
            <br />
            <p className = "text-white font-mono">Opinions, pathos and commentary is flagged and removed using our up-to-date AI</p>
            <br />
            <img src = {map} height = "42" width = "30" alt = "arrow"></img>
            <br />
            <p className = "text-white font-mono">All flagged content is added to a database to train our AI for enhanced service</p>
            <br />
            <img src = {map} height = "42" width = "30" alt = "arrow"></img>
            <br />
            <p className = "text-white font-mono">All objective content is compiled into an easy to read, user friendly news report</p>
            <br />
            <h1 className = "text-green-lighter font-bold"><center>What will the Compiled Report Include?</center></h1>
            <br />
            <p className = "text-white font-mono">In order to remain as objective as possible, MSM will retain the following
            in it's compiled report:</p>
            <br />
            <ul className = "text-white font-mono">
                <li>Dates and Times</li>
                <li>Names of pertinent individuals</li>
                <li>Direct quotations from reliable and unbiased sources</li>
                <li>Pictures and Videos will be kept for asthetic purposes</li>
                <li>Unbiased and reliable facts and statistics</li>
            </ul>
            </center>
            <br />
           
        </div>
    );
}

export default MissionStatement;