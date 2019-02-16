import React, { Component } from 'react';
import './App.css';
import Search from '../Search/Search';
import DocumentPage from'../DocumentPage/DocumentPage.js';
import MissionStatement from '../MissionStatement/MissionStatement.js';
class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <DocumentPage />
        <MissionStatement/>
      </div>
    );
  }
}

export default App;
