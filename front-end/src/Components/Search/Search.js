import React, { Component } from 'react';
import { withRouter} from "react-router-dom";
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
                <center className = "center">
                <div className="w-full max-w-sm">
                        <form className="flex w-full items-center py-2 rounded-full bg-blue-darker" onSubmit = {() => this.searchSubmit()}>
                            <input className="appearance-none bg-transparent border-none w-full text-white text-2xl ml-3 py-1 px-2 leading-tight focus:outline-none" type="text" onChange={(event) => this.onSearchChange(event)} value={this.state.search} aria-label="Full name" id ="test"  />
                            <button type="submit" className="flex-no-shrink bg-blue hover:bg-blue-dark border-blue hover:border-blue-dark text-sm border-4 text-white py-4 px-8 mr-2 rounded-full" onClick = {() => this.searchSubmit()}>
                            </button>
                        </form>
                    </div>
                </center>
            </div>
        );   
    } 
}

export default withRouter(Search);
