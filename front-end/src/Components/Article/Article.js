import React, { Component } from 'react';
import Logo from '../Logo/Logo.js';
import trump_wall from '../Logo/trump_wall.jpg';
import './Article.css';
import SourceList from '../SourceList/SourceList';
import GridItem3 from '../ListItem/GridItem3';
import ShareThis from '../ShareThis/ShareThis';


class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "Donald Trump Declares Border Problems a National Emergency",
          img: trump_wall,
          bullets: [
              "President Trump has declared a nationial emergency regarding the funding of the border-wall between Mexico and the United States",
              "There are not statutes that explicitly declare what a 'National Emergency' is",
              "To this date, there has been a total of 58 national emergencies declared since 1976",
              "Donald Trump can now explicitly cite different pieces of the U.S Code to justify his decision to construct the wall",
              "Currently, estimates predict that there is only $2,000,000,000 available to build the wall, however this number could be much higher",
              "Trump can use a variety of different sources in the U.S. code to support his actions, including drug defense and national defense",
              "As president, Trump can declare a National Emergency any time he wants, however there will almost definitely be some legal push back",
              "Ultimately, Donald Trump will butt heads with Congress over the timing and financing of the wall"
          ].map((bullet, index) => {
            return (
                <li key={`bullet${index}`} className="padding">
                    {bullet}
                </li>
            );
        })
        }
    }

    componentDidMount() {
        let body = process.env.REACT_APP_URL + "/solr/monkey/selectq=title%3A" + encodeURIComponent(String(this.props.match.params.id).split("+").join(" ").replace(/ /, "")) + "&wt=json";
        let authorization = "Basic " + window.btoa(process.env.REACT_APP_USERNAME + ":" + process.env.REACT_APP_PASSWORD);
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
                throw new Error('Failed to fetch articles from solr');
            }
        })
        .then(data => {
                data = data.response.docs[0];
                data.summary = data.summary[0].split(".");
                data.summary.pop();
                this.setState({
                    title:  data.title[0],
                    bullets: data.summary.map((bullet, index) => {
                        return (
                            <li key={`bullet${index}`} className="padding">
                                {bullet}
                            </li>
                        );
                    })
                });
        });
    }

    render() { 
        let {title, img, bullets} = this.state;
        return (
        <div className="Grid bg-blue-darkest">
            <center>
                <Logo/>
                <h1 className = "text-green-lighter font-bold pb-5">{title}</h1>
                <img src = {img} alt = "Non-biased Trump" width = "500" className = "rounded"/>
                <h1 className = "text-green-lighter font-bold p-5">Your Compiled Article: </h1>
            </center>
            <ul className = "text-white font-mono font-bold padding pb-5 text-xl">
                {bullets}
            </ul>
            <center>
                <br />
            </center>
            <SourceList/>
            <ShareThis/>
            
        </div>
    );
    }
}

export default Article