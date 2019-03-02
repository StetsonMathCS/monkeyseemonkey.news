import React, {Component} from 'react';


class Test extends Component {
  render () {
    var fakeData = require('../JsonTesting/fakedata.json');
    
    return (
     document.write(fakeData.name),
     document.write(fakeData.date),
     document.write(fakeData.story)
    )
  }
};

export default Test;