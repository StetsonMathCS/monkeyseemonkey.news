import React, { Component } from 'react';
import { withRouter, BrowserRouter, Route } from 'react-router-dom';
import SearchResults from '../SearchResults/SearchResults';
import Article from '../Article/Article';
import Home from '../Home/Home';
import Sources from '../Sources/Sources';
import Stats from '../Stats/Stats';
import Publisher from '../Publisher/Publisher';
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
          <Route path="/sources/:id" component={Sources}/>
          <Route path="/stats/:id" component={Stats}/>
          <Route path="/publisher/:id" component={Publisher}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
