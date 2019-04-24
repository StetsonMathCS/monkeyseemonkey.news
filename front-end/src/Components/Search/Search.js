import React, { Component } from 'react';
import { Link, withRouter} from "react-router-dom";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { finished } from 'stream';
//import SearchLog2 from '../Search/SearchLog.json';
//import console = require('console');
//import console = require('console');
//import * as fs from 'fs';
//

//var fs = require('fs');

/*
window.onload=function(){
      
var v;
    document.getElementById('test').addEventListener('change', function(event) { // DO NOT CALL THE DOM WHEN USING REACT
        v = event.target.value;

        let search= {  
            search: v
        };
        let data = JSON.stringify(search);
       console.log(data);
    });
    
  }
*/
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
                <form className="w-full max-w-sm">
                        <div className="flex w-full items-center py-2 rounded-full bg-blue-darker">
                            <input className="appearance-none bg-transparent border-none w-full text-white text-2xl ml-3 py-1 px-2 leading-tight focus:outline-none" type="text" onChange={(event) => this.onSearchChange(event)} value={this.state.search} aria-label="Full name" id ="test"  />
                            <button className="flex-no-shrink bg-blue hover:bg-blue-dark border-blue hover:border-blue-dark text-sm border-4 text-white py-4 px-8 mr-2 rounded-full" type="button" onClick = {() => this.searchSubmit()} >
                            </button>
                        </div>
                    </form>
                </center>
            </div>
        );   
    } 
}

export default withRouter(Search);
