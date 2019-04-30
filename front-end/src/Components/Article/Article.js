import React, { Component } from 'react';
import Logo from '../Logo/Logo.js';
import { Link } from "react-router-dom";
import './Article.css';
import ShareThis from '../ShareThis/ShareThis';
import GridItem from '../ListItem/GridItem.js'


class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "Donald Trump Declares Border Problems a National Emergency",
          ogarticle: "",
          ogscore: "",
          publisher: "",
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
        let body = process.env.REACT_APP_URL + "/solr/monkey/selectq=summaryid%3A" + String(this.props.match.params.id).split("+").join(" ").replace(/ /, "") + "&wt=json";
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
                throw new Error('Failed to fetch articles from solr');
            }
        })
        .then(data => {
                data = data.response.docs[0];
                data.summary = data.summary[0].split("//");
                this.setState({
                    title:  data.title[0],
                    ogarticle: data.url,
                    ogscore: String(data.score).slice(0, 5),
                    publisher: data.publisher,
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
        let {title, ogarticle, ogscore, publisher, bullets} = this.state;
        return (
            <center>
                <div className="grid bg-blue-darkest">
                    <center>
                        <Logo/>
                        <h1 className = "text-green-lighter font-bold pb-5">{title}</h1>
                    </center>
                    <ul className = "text-white font-mono font-bold pb-5 text-xl">
                        {bullets}
                    </ul>
                    <center>
                        <br />
                    </center>
                    <a href={ogarticle} className="text-2xl">Visit the original article</a>
                    <p className="text-base text-grey-darker mb-3"> Original article bias score (Lower is better): {ogscore} / 1 </p>
                    <Link to={`/publisher/+${encodeURIComponent(publisher)}`}>
                        <div className="grid hover:border-blue bg-blue-darker border-r-2 border-b-2 border-l-2 border-t-2 border-blue-darker rounded">
                        <h2 className="font-bold mb-2 text-center text-green-lighter pt-5">{`Click this to see other articles from ${publisher}!`}</h2>
                        </div>
                        <br />
                        <br />
                        </Link>
                    <ShareThis/>
                </div>
            </center>
    );
    }
}

export default Article