import React, { Component } from 'react';
import './App.css';
import  Mission from '../Components/Mission-Statement/mission-statement.js';
import HomePage from '../Components/HomePage/HomePage.js';
import DocumentPage from'../Components/DocumentPage/DocumentPage.js';

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <DocumentPage />
      </div>
    );
  }
}

export default App;
