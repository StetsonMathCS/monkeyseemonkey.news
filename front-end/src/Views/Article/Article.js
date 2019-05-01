import React, { Component } from 'react';
import Logo from '../../Components/Logo/Logo.js';
import { Link } from "react-router-dom";
import './Article.css';
import ShareThis from '../../Components/SocialMediaButtons/SocialMediaButtons';


class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          ogarticle: "",
          ogscore: "",
          publisher: "",
          bullets: []
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
                data.summary.shift();
                this.setState({
                    title:  data.title[0],
                    ogarticle: data.url,
                    ogscore: String(data.score * 10).slice(0, 5),
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
                <div className="grid bg-blue-darkest ">
                    <center>
                        <Logo/>
                        <h1 className = "text-green-lighter text-2xl md:text-3xl font-bold pb-5">{title}</h1>
                    </center>
                    <ul className = "text-white font-mono font-bold pb-5 ml-0 md:mx-auto text-lg md:text-xl">
                        {bullets}
                    </ul>
                    <center>
                        <br />
                    </center>
                    <p className="text-base text-grey-dark text-2xl"> 
                        <a href={ogarticle}>Original article</a> published by
                        <Link to={`/publisher/+${encodeURIComponent(publisher)}`}> {publisher}</Link>
                    </p>
                    <p className="text-base text-grey-darker mb-3 px-2"> Original article bias score (Lower is better): {ogscore} / 10 </p>
                    <ShareThis/>
                </div>
            </center>
    );
    }
}

export default Article