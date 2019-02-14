import React, { Component } from 'react';
import './App.css';
import HomePage from '../HomePage/HomePage';
import DocumentPage from'../DocumentPage/DocumentPage.js';

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
