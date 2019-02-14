import React, { Component } from 'react';
import './App.css';
import HomePage from '../HomePage/HomePage';
import DocumentPage from'../DocumentPage/DocumentPage.js';
import MissionStatement from '../MissionStatement/MissionStatement.js';
class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <DocumentPage />
        <MissionStatement/>
      </div>
    );
  }
}

export default App;
