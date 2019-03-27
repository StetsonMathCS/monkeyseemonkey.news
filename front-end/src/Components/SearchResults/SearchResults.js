import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from '../Logo/Logo.js';
import Search from '../Search/Search.js'

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: String(props.match.params.id).split("+").join(" "),
            listItems: []
        };
    }

    componentDidMount() {
        let url = 'http://localhost:4567/article/' + this.state.search;
        fetch(url, {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                listItems:  data.listItems.map((index, title, description, image) => {
                    return (
                        <ListItem key={`bullet ${index}`} title = {title} description = {description} image = {image}/>
                    );
                })
            });
        })
    }    

    render() {
        return (
            <div className = "container mx-auto bg-blue-darkest" >
<<<<<<< HEAD
            <center>
            <Logo />
            <Search />
            <br />
            <h1 className = "pt-3 pb-5 text-green-lighter font-bold">Your Search Results!</h1>
            <div>
                <ListItem/>
            </div>
            </center>
=======
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
>>>>>>> dca74366c5c8bed5c478da5a516e517336a50914
            </div>
        );
    }
}

export default SearchResults;