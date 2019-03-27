import React, { Component } from 'react';
import Logo from '../Logo/Logo.js';
import trump from '../Logo/trump.jpg';
import abc from '../Logo/abc.png';
import trump_wall from '../Logo/trump_wall.jpg';
import './Article.css';
import SourceList from '../SourceList/SourceList';


class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
          articlename: "Donald Trump Declares Border Problems a National Emergency",
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
        let url = 'http://localhost:4567/article/' + String(this.props.match.params.id).split("+").join(" ");
        fetch(url, {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                articlename: data.articlename,
                img: data.img,
                bullets:  data.bullets.map((bullet, index) => {
                    return (
                        <li key={`bullet${index}`} className="padding">
                            {bullet}
                        </li>
                    );
                })
            });
        })
    }

    render() { 
        let {articlename, img, bullets} = this.state;
        return (
        <div className="Grid bg-blue-darkest">
            <center>
                <Logo/>
                <h1 className = "text-green-lighter font-bold pb-5">{articlename}</h1>
                <img src = {img} alt = "Non-biased image of Trump" width = "500" className = "rounded"/>
                <h1 className = "text-green-lighter font-bold p-5">Your Compiled Article: </h1>
            </center>
            <ul className = "text-white font-mono font-bold padding pb-5 text-xl">
                {bullets}
            </ul>
            <center>
                <div className="max-w-md lg:flex">
                    <div >
                    <img src = {trump}  max-height = "auto" className = "rounded-l border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light"/>
                    </div>
                    <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className>
                            
                            <p className="text-grey-darker text-base">We found an article from ABC that passes our reliability metrics! If you are 
                            looking for some reliable news, this article would be a good place to start!</p>
                        </div>
                        <div className="flex items-center w-full">
                            <img className="w-10 h-10 rounded-full mr-4" src = {abc}/>
                            
                                <p className="text-black leading-none text-sm">% Reliability</p>
                                <p className="text-grey-dark text-sm">-86%</p>
                            
                        </div>
                    </div>
                </div>
                <br />
            </center>
            <SourceList/>
        </div>
    );
    }
}

export default Article