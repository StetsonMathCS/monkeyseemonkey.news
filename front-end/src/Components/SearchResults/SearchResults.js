import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from '../Logo/Logo.js';
import Search from '../Search/Search.js'

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: String(props.match.params.id).split("+").join(" ")
        };
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
                <ListItem/>
            </div>
            </center>
=======
                <center/>
                <Logo />
                <Search />
                <br />
                <h1 className = "pt-3 pb-5 text-green-lighter font-bold">Your Search Results!</h1>
                <div>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </div>
>>>>>>> e7428e179275ab17915606e6a90c90366f1e3c35
            </div>
        );
    }
}

export default SearchResults;