import React, { Component } from 'react';
import Logo from '../Logo/Logo.js';
import Search from '../Search/Search.js'
import { withRouter } from "react-router-dom";
import GridItem from '../ListItem/GridItem'
import InfiniteScroll from 'react-infinite-scroller'
class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: String(props.match.params.id).split("+").join(" ").replace(/ /, ""),
            hasMore: true,
            articles: [],
            start: 0
        };
    }
    /*
    shouldComponentUpdate(nextProps) {
        return nextProps.location.pathname != this.props.location.pathname;
    }
    */

    componentDidUpdate(prevProps, prevState) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.setState ({
            hasMore: true,
            articles: [],
            start: 0
            });
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
            if (Array.isArray(data.response.docs) || data.response.docs.length) {
                data = data.response;
                //data.docs = this.state.articles.concat(data.docs);
                if(data.numFound <= this.state.start + 10) this.setState({hasMore: false});
                this.setState({
                    articles: data.docs,
                    start: (this.state.start + 10)
                });
            } else {
                this.setState({
                    hasMore: false
                });
            }
        });
    }    

    render() {
        let items = [];
        // eslint-disable-next-line
        if(this.state.articles.length) {
            this.state.articles.map((article, i) => {
                items.push(
                    <GridItem title={article.title[0]} summary={article.summary[0].split(".")[0].replace(/\+/, ".")} key={i}/>
                );
            });
        } else {
            items.push(<h1 className="pt-0 text-green-lighter"> No Articles Found </h1>);
            console.log("hi");
        }

        return (
            <div className = "container mx-auto bg-blue-darkest" >
                <center>
                <Logo />
                <Search search={this.props.search} onSearchChange={this.props.onSearchChange}/>
                {/* put in link to modified search */}
                <br />
                <br />
                <br />
                <div>
                {/*
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadItems()}
                    hasMore={this.state.hasMore}
                    initialLoad={this.state.initialLoad}
                    loader={<div>Loading ...</div>}
                    useWindow={true}
                    >
                    {<div className="h-screen">{items}</div>}
                </InfiniteScroll>
                */}
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