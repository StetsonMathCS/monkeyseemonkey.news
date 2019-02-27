import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchResults from '../SearchResults/SearchResults';
import Article from '../Article/Article';
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
    this.setState({
        search: event.target.value.replace(/ /g,"+")
    });
  }


  render() {
    return (
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/searchresults/:id" component={SearchResults}  search={this.state.search} onSeachChange={this.onSearchChange}/>
        {/*<Route path="/:id" component={Article}/>*/}
      </Router>
    );
  }
}

export default App;
