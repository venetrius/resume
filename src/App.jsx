import React, { Component } from 'react';
import Resume from './Components/Resume.jsx'
import data from './dummydata.js'


class App extends Component {
  render() {
    return (
      <Resume data={data} />
    )
  }
}
export default App;
