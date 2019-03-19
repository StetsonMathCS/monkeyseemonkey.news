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
            <center>
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
        );
    }
}

export default SearchResults;