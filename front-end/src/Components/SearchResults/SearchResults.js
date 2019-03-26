import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from '../Logo/Logo.js';
import Search from '../Search/Search.js'
import GridItem from '../ListItem/GridItem'
import InfiniteScroll from 'react-infinite-scroller';
class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: String(props.match.params.id).split("+").join(" "),
            listItems: [],
            hasMore: true,
            page: 0
        };
    }

    componentDidMount() {
        loadItems();
    }
    
    loadItems() {
        let url = 'http://localhost:4567/searchresults/wt=json';
        fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: {
                query: this.state.search,
                limit: 10,
                start: page * 10
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                this.setState({ hasMore: false });
                throw new Error('failed to fetch articles');
            }
        })
        .then(data => {
            this.setState({
                listItems:  data.listItems,
                page: page++
            });
        })
    }
    
    render() {
        let items = [];

        this.state.listItems.map((item, i) => {
            items.push(
                <GridItem key={i} name={item.name} img={item.img} description={item.description}/>
            );
        });



        return (
            <div className = "container mx-auto bg-blue-darkest" >
                <center>
                <Logo />
                <Search />
                <br />
                <h1 className = "pt-3 pb-5 text-green-lighter font-bold">Your Search Results!</h1>
                <div>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={loadItems()}
                    hasMore={this.state.hasMore}
                    loader={<div>Loading ...</div>}
                    >
                    {items}
                </InfiniteScroll>
                </div>
                </center>
            </div>
        );
    }
}

export default SearchResults;