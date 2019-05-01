import React, { Component } from 'react';
import Logo from '../../Components/Logo/Logo.js'
import map from '../../Components/Images//map.png'
import Search from '../../Components/SearchBar/Search.js'
import './Home.css';
import BI from '../../Components/Images/BI.png';
import gizmodo from '../../Components/Images/gizmodo.png';
import NewYorkTimes from '../../Components/Images/nyt1.png';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            NewYorkTimes: "_____",
            Gizmodo: "_____",
            businessInsider: "_____"
        }
    }
    
    componentDidMount() {
        this.loadItems();
    }

    loadItems() {
        let body = process.env.REACT_APP_URL + "/solr/monkey/selectq=*%3A*&wt=json";
        let authorization = "Basic " + window.btoa(process.env.REACT_APP_USERNAME + ":" + process.env.REACT_APP_PASSWORD);
        console.log(body);
        fetch(body, { 
            mode: "cors",
            headers: { "Content-Type": "application/json",
                        "Authorization": authorization}, 
            method: "GET" 
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                this.setState({
                    hasMore: false
                });
                throw new Error('Failed to fetch articles from solr');
            }
        })
        .then(data => {
            if (data.response.docs.length !== 0) {
                data = data.response.docs;
                for(const article of data) {
                    if(article.publisher === "The New York Times" && this.state.NewYorkTimes === "_____") {
                        this.setState({
                            NewYorkTimes: article.score
                        });
                    } else if(article.publisher === "Gizmodo.com" && this.state.Gizmodo === "_____") {
                        this.setState({
                            Gizmodo: article.score
                        });
                    }  else if(article.publisher === "Business Insider" && this.state.businessInsider === "_____") {
                        this.setState({
                            businessInsider: article.score
                        });
                    } 
                }
                /*
                for(const article of data) {
                    if(article.publisher === "Gizmodo.com" && this.state.Gizmodo === "_____") {
                        this.setState({
                            Gizmodo: article.score
                        })
                    } 
                    
                }
                for(const article of data) {
                    if(article.publisher === "Business Insider" && this.state.businessInsider === "_____") {
                        this.setState({
                            businessInsider: article.score
                        })
                    } 
                }
                */
            }
        });
    }    


    render() {
    return (
        <div className = "container mx-8 bg-blue-darkest" >
            <center>
            <div className="homegrid h-screen bg-blue-darkest z-10">
                <div/>
                <div/>
                <div/>
                <Logo/>
                <Search search={this.props.search} onSearchChange={this.props.onSearchChange}/>
                <p id="about" className="text-xl pt-3 text-green-lighter font-bold"> The World's only <b>UNBIASED</b> News Source </p>
                <p className="self-end pb-3 text-green-lighter font-bold">Our Mission Statement Below</p>
            </div>
            <div id="about">
                <h1 className = "text-5xl font-bold text-blue-light text-center positioner"><b>About Us</b></h1>
                <br />
                <br />
                
                <h1 className = "text-green-lighter font-bold positioner"><center>Mission Statement</center></h1>
                <br />
                
                <center>
                    <p className = "text-xl text-white font-mono"><b>Here at MSM, we believe that everybody should have free and unlimited access to reliable<br />
                        and trustworthy news sources. As part of our application model, we deploy artificial intelligence to crawl <br />
                        the web and filter out any bias that is identified in recently published news articles. We stand firmly against prejudice, <br />
                        and our goal is to provide our users with as much accuracy as possible when keeping up to date with the news.</b>
                    </p>
                    <br />
                    <br />
                    <h1 className = "text-green-lighter font-bold"><center>How does our service work?</center></h1>
                    <br />
                    <p className = "text-xl text-white font-mono">Our application crawls the web for all of the top articles on the user-specified subject</p>
                    <br />
                    <img src = {map} height = "42" width = "30" alt = "arrow"></img>
                    <br />
                    <p className = "text-xl text-white font-mono">Opinions, pathos and commentary are flagged and removed using our up-to-date AI</p>
                    <br />
                    <img src = {map} height = "42" width = "30" alt = "arrow"></img>
                    <br />
                    <p className = "text-xl text-white font-mono">All flagged content is added to a database to train our AI for enhanced future accuracy</p>
                    <br />
                    <img src = {map} height = "42" width = "30" alt = "arrow"></img>
                    <br />
                    <p className = "text-xl text-white font-mono">All objective content is compiled into an easy to read, user friendly news report</p>     
                    <br />
                    <h1 className = "text-2xl text-green-lighter font-bold positioner">Recent Article Scores from Popular Publishers</h1>
                    </center>
                    <br />
                </div>
                <div className = "frontBias">
                <div className = "positionMe"><img src = {NewYorkTimes} height = "42" width = "30" alt = "arrow" className = "logoStat"></img> <h1 className = "text text-blue-light" id="sourceText">{String(this.state.NewYorkTimes * 10).slice(0,5)}</h1></div>
                <br />
                <div className = "positionMe"><img src = {gizmodo} height = "42" width = "30" alt = "arrow" className = "logoStat"></img> <h1 className = "text text-blue-light" id="sourceText">{String(this.state.Gizmodo * 10).slice(0,5)}</h1></div>
                <br />
                <div className = "positionMe"><img src = {BI} height = "42" width = "30" alt = "arrow" className = "logoStat"></img> <h1 className = "text text-blue-light" id="sourceText">{String(this.state.businessInsider * 10).slice(0,5)}</h1></div>
                </div>
                </center> 
            </div> 
        );
    }
    
}

export default Home;