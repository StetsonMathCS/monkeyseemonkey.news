import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from './Logo/Logo.js';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: props.match.params.id.replace(/ "+", /g)
        };
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default SearchResults;