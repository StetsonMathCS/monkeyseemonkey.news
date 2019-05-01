import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchResults from '../Views/SearchResults/SearchResults';
import Article from '../Views/Article/Article';
import Home from '../Views/Home/Home';
import Publisher from '../Views/PublisherResults/PublisherResults';
import './App.css';
class App extends Component {

  constructor() {
    super();
    this.state = {
      search: ""
    }
  }

  componentDidMount(){
    document.title = "MSM"
  }

  onSearchChange = (searchR) => {
    this.setState({
        search: searchR.replace(/ /g,"+")
    });

  }


  render() {
    return (
      <BrowserRouter>
        <div className="100vh bg-blue-darkest">
          <Route  exact path="/" 
                  render={(props) => <Home {...props} search={this.state.search} onSearchChange={this.onSearchChange} />} />
          <Route exact path="/searchresults/:id" 
                  render={(props) => <SearchResults {...props} search={this.state.search} onSearchChange={this.onSearchChange} />} />
          <Route path="/article/:id" component={Article}/>
          <Route path="/publisher/:id" component={Publisher}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
