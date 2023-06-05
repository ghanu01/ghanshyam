import React, { Component } from 'react'

export class Classcomponent extends Component {
  render() {
    return (
      <div className='daba'>
        <h1>This is created using class component</h1>
        <h4>This is done by using external css</h4>
        <p style={{color:"blue"}}>This is using inline css</p>
      </div>
    )
  }
}

export default Classcomponent