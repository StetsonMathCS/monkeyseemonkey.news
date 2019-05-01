import React, { Component } from 'react';
import { withRouter} from "react-router-dom";
import "./Search.css";
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    onSearchChange(event) {
        this.setState({
            search: event.target.value
        });
    }

    searchSubmit() {
        this.props.onSearchChange(this.state.search);
        this.props.history.push(`/searchresults/+${this.state.search}`);
    }

    render() {
        return (
            <div className = "bg-blue-darkest" >
                <form id="searchForm" className="flex flex bg-blue-darkest sm:max-w-sm md:max-w-md py-2 rounded-full bg-blue-darker" onSubmit = {() => this.searchSubmit()}>
                    <input size="1" className="flex-grow appearance-none bg-transparent border-none text-white text-2xl pl-6 py-1 leading-tight focus:outline-none" type="text" onChange={(event) => this.onSearchChange(event)} value={this.state.search} aria-label="Full name" id ="test"  />
                    <button type="submit" id="searchSubmit" className="mr-2 relative bg-blue hover:bg-blue-dark border-blue hover:border-blue-dark border-4 text-white py-4 px-8 rounded-full xs:px-0" onClick = {() => this.searchSubmit()}>
                    </button>
                </form>
            </div>
        );   
    } 
}

export default withRouter(Search);
