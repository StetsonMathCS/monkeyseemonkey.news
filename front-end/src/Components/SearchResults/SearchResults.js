import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Logo from '../Logo/Logo.js';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: props.match.params.id.split("+").join(" ")
        };
    }

    render() {
        return (
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