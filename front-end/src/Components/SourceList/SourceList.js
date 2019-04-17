import React, { Component } from 'react';
import Source from './Source/Source';
import './SourceList.css';

class SourceList extends Component {
  
  render() {
    return (
      <div className = "pt-5 text-white">
        <h1 className = "text-center font-bold text-xl mb-2"> Sources </h1>
        <table className = "w-full pb-5 text-xl"> 
          <Source/>
          <tr>
            <th> Article 1 </th>
            <th> Publisher 1 </th>
            <th> Date 1 </th>
          </tr>
          <tr>
            <th> Article 2 </th>
            <th> Publisher 2 </th>
            <th> Date 2 </th>
          </tr>
        </table>
      </div>
    );
  }
}

export default SourceList;
