import React, { Component } from 'react';
import './SourceList.css';

class SourceList extends Component {

  constructor(props) {
    super(props);
    }


  // title: sources
  // make a table with columns and rows and stuff
  // publisher, title, date published (and column labels) 
  // the title will be a link to the article                
  // publisher: link to publisher as well as logo           
  // centered, same size font as article, white font        
  // background color change to light grey/blue             
  // make sure is seperated for beautiful

  render() {
    return (
      <div>
        <h1 className = "text-center text-white font-bold text-xl mb-2"> Sources </h1>
        <table className = "w-full"> 
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
