import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { finished } from 'stream';
//import SearchLog2 from '../Search/SearchLog.json';
//import console = require('console');
//import console = require('console');
//import * as fs from 'fs';
//

//var fs = require('fs');
window.onload=function(){
      
var v;
    document.getElementById('test').addEventListener('change', function(event) {
        v = event.target.value;

        let search= {  
            search: v
        };
        let data = JSON.stringify(search);
       console.log(data);
    });
    
  }

class Search extends Component {
    
    // eslint-disable-next-line
    constructor(props) {
        super(props);   
    }

    render() {
        return (
            <div className = "bg-blue-darkest" >
                <center className = "center">
                <form className="w-full max-w-sm">
                        <div className="flex w-full items-center py-2 rounded-full bg-blue-darker">
                            <input className="appearance-none bg-transparent border-none w-full text-white text-2xl ml-3 py-1 px-2 leading-tight focus:outline-none" type="text" onChange={this.props.onSearchChange} aria-label="Full name" id ="test"  />
                            <Link to={`/searchresults/+${this.props.search}`}>
                                <button className="flex-no-shrink bg-blue hover:bg-blue-dark border-blue hover:border-blue-dark text-sm border-4 text-white py-4 px-8 mr-2 rounded-full" type="button" >
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
