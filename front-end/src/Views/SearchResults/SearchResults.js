import React, { Component } from 'react';
import Logo from '../../Components/Logo/Logo.js';
import Search from '../../Components/SearchBar/SearchBar.js';
import { withRouter } from "react-router-dom";
import GridItem from '../../Components/SearchResult/SearchResult';
import './SearchResults.css';
import { Link } from "react-router-dom";
class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: String(props.match.params.id).split("+").join(" ").replace(/ /, ""),
            hasMore: true,
            articles: [],
            start: 0,
            spellCheck: ""
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.setState ({
            hasMore: true,
            articles: [],
            start: 0
            });
            // eslint-disable-next-line
            this.state.search = this.props.match.params.id;
            this.loadItems();
        }
        
    }

    componentDidMount() {
        this.loadItems();
    }

    loadItems() {
        let body = process.env.REACT_APP_URL + "/solr/monkey/selectq=summary%3A" + encodeURIComponent(this.state.search) + "&start=" + 0 + "&wt=json";
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
                this.setState({
                    hasMore: false
                });
                throw new Error('Failed to fetch articles from solr');
            }
        })
        .then(data => {
            if (data.response.docs.length !== 0) {
                data = data.response;
                //data.docs = this.state.articles.concat(data.docs);
                if(data.numFound <= this.state.start + 10) this.setState({hasMore: false});
                this.setState({
                    articles: data.docs,
                    start: (this.state.start + 10),
                });
            } else {
                if(data.spellcheck.suggestions[1]) {
                    this.setState({
                        hasMore: false,
                        spellCheck: data.spellcheck.suggestions[1].suggestion[0].word
                    });
                }
            }
        });
    }    

    render() {
        let items = [];
        if(this.state.articles.length) { // eslint-disable-next-line
            this.state.articles.map((article, i) => {
                items.push(
                    <GridItem title={article.title[0]} summary={article.summary[0].replace(/\/\//g, ".")} id={article.summaryid} key={i}/>
                );
            });
        } else {
            items.push(<h1 className="pt-0 text-green-lighter" key="0"> No Articles Found </h1>);
            if(this.state.spellcheck) {
                items.push(<div className="text-green-lighter" key="1"> Did you mean: <Link to={`/searchresults/+${this.state.spellCheck.split(" ").join("+")}`}>{this.state.spellCheck}</Link> </div>);
            }
        }

        return (
            <div className = "container mx-auto bg-blue-darkest" >
                <center>
                <Logo />
                <Search search={this.props.search} onSearchChange={this.props.onSearchChange}/>
                <br />
                <br />
                <br />
                <div>
                {items}
                </div>
                    <br />
                    <br />
                </center>
            </div>
        );
    }
}

export default withRouter(SearchResults);