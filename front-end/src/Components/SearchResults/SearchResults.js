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

    componentDidMount() {
        this.loadItems();
    }
    
    loadItems() {
        let authorization = "Basic " + window.btoa(process.env.REACT_APP_USERNAME + ":" + process.env.REACT_APP_PASSWORD);
        fetch("https://afternoon-scrubland-89567.herokuapp.com/solr/monkey/selectq=summary%3Atrump's&start=0&wt=json", { 
            mode: "cors",
            headers: { "Content-Type": "application/json",
                        "Authorization": authorization}, 
            method: "GET" 
        })
        .then(response => response.json())
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
            return <GridItem title={article.title} summary={article.summary} key={i}/>
        });

        return (
            <div className = "container mx-auto bg-blue-darkest" >
                <center>
                <Logo />
                <Search />
                <br />
                <h1 className = "pt-3 pb-5 text-green-lighter font-bold">Your Search Results!</h1>
                <br />
                <br />
                <div>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadItems()}
                    hasMore={this.state.hasMore}
                    loader={<div>Loading ...</div>}
                    >
                    {items}
                </InfiniteScroll>
                </div>
                    <br />
                    <br />
                </center>
            </div>
        );
    }
}

export default SearchResults;