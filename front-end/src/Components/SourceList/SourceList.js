import React, { Component } from 'react';
import './SourceList.css';

class SourceList extends Component {

  constructor(props) {
    super(props);
    }

<<<<<<< HEAD
  // title: sources                                         
  // make a table with columns and rows and stuff           
  // publisher, title, date published (and column labels)   
=======

  // title: sources
  // make a table with columns and rows and stuff
  // publisher, title, date published (and column labels) 
>>>>>>> cba1690c3367dc053c1cbc577423fc027f907c08
  // the title will be a link to the article                
  // publisher: link to publisher as well as logo           
  // centered, same size font as article, white font        
  // background color change to light grey/blue             
<<<<<<< HEAD
  // make sure is seperated for beautiful     
  render() {
    return (
      <div className="bg-blue-darker">
        <h1 className = "center text-white font-bold text-xl mb-2"> Sources </h1>
        <table className = "w-full text-white font-mono font-bold pb-5 text-xl"> 
          <tr>
            <th> Article Name </th>
            <th> Publisher </th>
            <th> Date Published </th>
          </tr>
=======
  // make sure is seperated for beautiful

  render() {
    return (
      <div>
        <h1 className = "text-center text-white font-bold text-xl mb-2"> Sources </h1>
        <table className = "w-full"> 
>>>>>>> cba1690c3367dc053c1cbc577423fc027f907c08
          <tr>
            <th> <a href="https://www.google.com/">Article 1</a> </th>
            <th> <a href="https://www.google.com/">Publisher 1</a> </th>
            <th> Date 1 </th>
          </tr>
          <tr>
            <th> <a href="https://www.google.com/">Article 2</a> </th>
            <th> <a href="https://www.google.com/">Publisher 2</a> </th>
            <th> Date 2 </th>
          </tr>
          <tr>
            <th> <a href="https://www.google.com/">Article 3</a> </th>
            <th> <a href="https://www.google.com/">Publisher 3</a> </th>
            <th> Date 3 </th>
          </tr>
        </table>
      </div>
    );
  }
}

export default SourceList;
