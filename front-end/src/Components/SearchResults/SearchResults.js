import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from '../Logo/Logo.js';
import Search from '../Search/Search.js'
import GridItem from '../ListItem/GridItem'
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
                <center>
                <Logo />
                <Search />
                <br />
                <h1 className = "pt-3 pb-5 text-green-lighter font-bold">Your Search Results!</h1>
                <br />
                <div>
                    <GridItem/>
                    <br />
                    <br />
                    <GridItem/>
                </div>
                    <br />
                    <br />
                </center>
            </div>
        );
    }
}

export default SearchResults;