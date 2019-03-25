import React, { Component } from 'react';
import './SourceList.css';

class SourceList extends Component {

  constructor(props) {
    super(props);
    }
  


  // title: sources                                         //
  // make a table with columns and rows and stuff           //
  // publisher, title, date published (and column labels)   //
  // the title will be a link to the article                
  // publisher: link to publisher as well as logo           
  // centered, same size font as article, white font        //
  // background color change to light grey/blue             
  // make sure is seperated for beautiful                   
  render() {
    return (
      <div>
        <h1 className = "center text-white font-bold text-xl mb-2"> Sources </h1>
        <table className = "w-full"> 
          <tr>
            <th className = "text-white font-mono font-bold pb-5 text-xl"> Title + link </th>
            <th className = "text-white font-mono font-bold pb-5 text-xl"> Publisher + link </th>
            <th className = "text-white font-mono font-bold pb-5 text-xl"> Date Published </th>
          </tr>
          <tr>
            <th className = "text-white font-mono font-bold pb-5 text-xl"> Article 1 </th>
            <th className = "text-white font-mono font-bold pb-5 text-xl"> Publisher 1 </th>
            <th className = "text-white font-mono font-bold pb-5 text-xl"> Date 1 </th>
          </tr>
          <tr>
            <th className = "text-white font-mono font-bold pb-5 text-xl"> Article 2 </th>
            <th className = "text-white font-mono font-bold pb-5 text-xl"> Publisher 2 </th>
            <th className = "text-white font-mono font-bold pb-5 text-xl"> Date 2 </th>
          </tr>
        </table>
      </div>
    );
  }
}

export default SourceList;
