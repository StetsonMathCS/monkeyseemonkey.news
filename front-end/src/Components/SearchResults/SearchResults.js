import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from '../Logo/Logo.js';
import Search from '../Search/Search.js'
import InfiniteScroll from 'react-infinite-scroller'
import GridItem from '../ListItem/GridItem'
import GridItem2 from '../ListItem/GridItem2'
class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: String(props.match.params.id).split("+").join(" "),
            listItems: []
        };
    }

    componentDidMount() {
        this.loadItems();
    }
    
    loadItems() {
        let body = "{\"query\":" + this.state.search + ",\"limit\":\"10\",\"start\":"+ this.state.page * 10;
        fetch("http://localhost:8983/solr/monkey/query?wt=json", { 
            body: body, 
            headers: { "Content-Type": "application/x-www-form-urlencoded" }, 
            method: "POST" 
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                this.setState({ hasMore: false });
                throw new Error('failed to fetch articles');
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                listItems:  data.listItems,
                page: this.state.page++
            });
        })
    }    

    render() {

        let items = [];
        this.state.listItems.map((item, i) => {
            items.push(
                <GridItem name={item.name} description={item.description} img={item.img} key={i}/>
            );
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
                {/*
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadItems()}
                    hasMore={this.state.hasMore}
                    loader={<div>Loading ...</div>}
                    >
                    {items}
                </InfiniteScroll>
                */}
                <GridItem2/>
                </div>
                    <br />
                    <br />
                </center>
            </div>
        );
    }
}

export default SearchResults;