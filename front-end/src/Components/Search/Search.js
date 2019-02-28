import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "container mx-auto bg-black" >
                <center className="center">
                <form className="w-full max-w-sm">
                        <div className="flex items-center border-b border-b-2 border-blue py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search here" onChange={this.props.onSearchChange} aria-label="Full name"/>
                            <Link to={`/searchresults/${this.props.search}`}>
                                <button className="flex-no-shrink bg-blue hover:bg-blue-dark border-blue hover:border-blue-dark text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                    Search
                                </button>
                            </Link>
                        </div>
                    </form>
                </center>
            </div>
        );
    }
}

export default Search;