import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchResults from '../SearchResults/SearchResults';
import JsonTesting from '../JsonTesting/Test';
import Article from '../Article/Article';
import Article2 from '../Article/Article2';
import Home from '../Home/Home';
import './App.css';
class App extends Component {

  constructor() {
    super();
    this.state = {
      search: ""
    }
  }

  onSearchChange = (event) => {
    console.log(event);
    this.setState({
        search: event.target.value.replace(/ /g,"+")
    });
  }


  render() {
    return (
      <Router>
        <div>
          <Route  exact path="/" 
                  render={(props) => <Home {...props} search={this.state.search} onSearchChange={this.onSearchChange} />} />
          <Route path="/searchresults/(|:id)" component={SearchResults}/>
          <Route path="/article/:id" component={Article}/>
          <Route path="/sources/:id" component={Sources}/>
          
        </div>
      </Router>
    );
  }
}

export default App;
