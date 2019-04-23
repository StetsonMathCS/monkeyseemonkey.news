import React, { Component } from 'react';
import Logo from '../Logo/Logo.js';
import Search from '../Search/Search.js'
import InfiniteScroll from 'react-infinite-scroller'
import GridItem from '../ListItem/GridItem'
class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: String(props.match.params.id).split("+").join(" ").replace(/ /, ""),
            articles: [],
            start: 0
        };
    }

    /*componentDidMount() {
        this.loadItems();
    }*/
    
    loadItems() {
        let body = process.env.REACT_APP_URL + "/solr/monkey/selectq=summary%3A" + encodeURIComponent(this.state.search) + "&start=" + this.state.start + "&wt=json";
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
                })
                throw new Error('Failed to fetch articles from solr');
            }
        })
        .then(data => {
            console.log(data);
            data = data.response;
            console.log(data);
            if(data.numFound <= 10) this.setState({hasMore: false});
            this.setState({
                articles:  data.docs,
                start: (this.state.start + 10)
            });
        })
    }    

    render() {

        let items = 
        this.state.articles.map((article, i) => {
            article.title = article.title + '';
            article.summary = article.summary + '';
            return <GridItem title={article.title} summary={article.summary} key={i}/>
        });

        return (
            <div className = "container mx-auto bg-blue-darkest" >
                <center>
                <Logo />
                <Search search={this.props.search} onSearchChange={this.props.onSearchChange}/>
                <br />
                <br />
                <br />
                <div>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadItems()}
                    hasMore={this.state.hasMore}
                    loader={<div>Loading ...</div>}
                    >
                    <div>{items}</div>
                </InfiniteScroll>
                {/*items*/}
                </div>
                    <br />
                    <br />
                </center>
            </div>
        );
    }
}

export default SearchResults;