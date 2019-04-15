import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchResults from '../SearchResults/SearchResults';
import Article from '../Article/Article';
import Home from '../Home/Home';
import Sources from '../Sources/Sources';
import Stats from '../Stats/Stats';
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
          <Route path="/searchresults/:id" component={SearchResults}/>
          <Route path="/article/:id" component={Article}/>
          <Route path="/sources/:id" component={Sources}/>
          <Route path="/stats/:id" component={Stats}/>
        </div>
      </Router>
    );
  }
}

export default App;
