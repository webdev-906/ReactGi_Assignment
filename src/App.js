import React, { Component } from 'react'
import BasicInfo from './components/BasicInfo'
import './App.css'

class App extends Component {
  // Easy Challenge
  constructor(props){
    super(props);
    this.state = {
      person: {}
    }
  }
  // Very Easy Challenge
  render() {
    return (
      <div className="App">
        <h1 className="underline">React Gi Assignment</h1>
        {/* <h1>Alannah Gregory</h1>
        <h3>980-280-7101</h3>
        <p>Current Age: 7/1/1819</p> */}
        {/* ---------------------------------- */}
        {/* Medium Challenge */}
        <BasicInfo className="row"></BasicInfo>
      </div>
    )
  }
}

export default App
