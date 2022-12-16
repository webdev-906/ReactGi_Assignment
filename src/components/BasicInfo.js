import React, { Component } from 'react'

// Medium Challenge
class BasicInfo extends Component {
  constructor(){
    super()
    this.state = {
      personName: 'Alannah Gregory',
      personPhone: '980-280-7101',
      personAge: '7/1/1815',
    }
  }
  render() {
    // Hard Challenge
    let names = ['Sibrina Vinson', '000-000-0000', 'Age: Top secret', 'John Pace', '000-000-0000', 'Age: Top secret again' ,'Chappy Smalls', '000-000-0000', 'Age: Extremely top-secret'];
    let namesList = names.map(function(name){
      return <h3>{name}</h3>
    })

    return (
      <div>
        <h2>{this.state.personName}</h2>
        <h3>{this.state.personPhone}</h3>
        <p>{this.state.personAge}</p>
        <h3 className="rows">{ namesList }</h3>
      </div>
    )
  }
}

export default BasicInfo