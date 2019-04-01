import React from 'react';
import Logo from '../Logo/Logo.js'
import map from '../Logo/map.png'
import Search from '../Search/Search.js'
import './Home.css';
import MediaQuery from 'react-responsive';

const Home = ({search, onSearchChange}) => {
    return (
    <div>
    <MediaQuery query="(min-device-width: 1224px)">
    <div className = "container mx-auto bg-blue-darkest" >
            <center>
            <div className="homegrid h-screen">
                <div/>
                <div/>
                <div/>
                <Logo className="object-bottom"/>
                <Search className="" search={search} onSearchChange={onSearchChange}/>
                <p id="about" className="text-xl pt-3 text-green-lighter font-bold"> The worlds only Unbiased news source </p>
                <p className="self-end pb-3 text-green-lighter font-bold">our mission statement below</p>
            </div>
            <div id="about">
                <h1 className = "text-5xl font-bold text-indigo-dark">About US</h1>
                <br />
                <br />
                
                <h1 className = "text-green-lighter font-bold"><center>Our Mission Statement</center></h1>
                <br />
                <center>
                    <p className = "text-xl text-white font-mono">Here at Monkeyseemonkey.news, we believe that everybody should have consistent access to reliable<br />
                        and trustworthy news sources. As part of our software model, we deploy Artificial Intelligence to crawl <br />
                        the web and filter out any bias that we so commonly see in our modern news sources. We have no prejudice, <br />
                        and our goal is to provide our users with 100% accuracy in regards to their news searches.
                    </p>
                    <br />
                    <br />
                    <h1 className = "text-green-lighter font-bold"><center>How does this service work?</center></h1>
                    <br />
                    <p className = "text-xl text-white font-mono">User uses our search bar on the home page to search for a news query</p>
                    <br />
                    <img src = {map} height = "42" width = "30" alt = "arrow"></img>
                    <br />
                    <p className = "text-xl text-white font-mono">Our application crawls the web for all of the top news stories on the subject</p>
                    <br />
                    <img src = {map} height = "42" width = "30" alt = "arrow"></img>
                    <br />
                    <p className = "text-xl text-white font-mono">Opinions, pathos and commentary is flagged and removed using our up-to-date AI</p>
                    <br />
                    <img src = {map} height = "42" width = "30" alt = "arrow"></img>
                    <br />
                    <p className = "text-xl text-white font-mono">All flagged content is added to a database to train our AI for enhanced service</p>
                    <br />
                    <img src = {map} height = "42" width = "30" alt = "arrow"></img>
                    <br />
                    <p className = "text-xl text-white font-mono">All objective content is compiled into an easy to read, user friendly news report</p>
                    <br />
                    <br />
                    <h1 className = "text-xl text-green-lighter font-bold"><center>What will the Compiled Report Include?</center></h1>
                    <br />
                    <p className = "text-xl text-white font-mono">In order to remain as objective as possible, MSM will retain the following
                    in it's compiled report:</p>
                    <br />
                    </center>
                    <br />
                    <center>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-center text-white">Dates and Times</div>
                            <p className="text-grey-darker text-base">
                                We keep all relevant dates and times in our compilation, as this is vital to retain imporant information in our articles
                            </p>
                        </div>
                        <div className="flex flex-col flex-auto text-center px-6 py-4">
                            </div>
                    </div>
                    <br />
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-center text-white">Names of Relevant Individuals</div>
                            <p className="text-grey-darker text-base">
                                It is very important to retain the names of individuals that are relevant in the news article.
                            </p>
                        </div>
                        <div className="flex flex-col flex-auto text-center px-6 py-4">
                            </div>
                    </div>
                    <br />
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-center text-white">Direct Quotations from Reliable Sources</div>
                            <p className="text-grey-darker text-base">
                                Direct quotatioins will be kept, as long as they are unbiased and relevant to the point of the article.
                            </p>
                        </div>
                        <div className="flex flex-col flex-auto text-center px-6 py-4">
                            </div>
                    </div>
                    <br />
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-center text-white">Pictures & Videos</div>
                            <p className="text-grey-darker text-base">
                            For aesthetic purposes and to keep our users intrigued, most pictures and videos will be kept.
                            </p>
                        </div>
                        <div className="flex flex-col flex-auto text-center px-6 py-4">
                            </div>
                    </div>
                    <br />
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-center text-white">Facts and Statistics</div>
                            <p className="text-grey-darker text-base">
                                Facts and statistics will be retained, allowing our articles to remain as objective as possible.
                            </p>
                        </div>
                        <div className="flex flex-col flex-auto text-center px-6 py-4">
                            </div>
                    </div>
                    </center>
                </div>
                </center> 
            </div>
      <MediaQuery query="(min-device-width: 1824px)">
        <div>You also have a huge screen</div>
      </MediaQuery>
      <MediaQuery query="(max-width: 1224px)">
        <div>You are sized like a tablet or mobile phone though</div>
      </MediaQuery>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 1224px)">
      <div>You are a tablet or mobile phone</div>
    </MediaQuery>
    <MediaQuery query="(orientation: portrait)">
      <div>You are portrait</div>
    </MediaQuery>
    <MediaQuery query="(orientation: landscape)">
      <div>You are landscape</div>
    </MediaQuery>
    <MediaQuery query="(min-resolution: 2dppx)">
      <div>You are retina</div>
    </MediaQuery>
  </div>
       
            
    );
    
}

export default Home;