import React, { Component } from 'react'
import Classcomponent from './classcomponent'
import Functioncomponent from './functioncomponent'
import './App.css'
export class App extends Component {
  constructor(){
    super()
    this.state = {
     click1: false ,
     click2: false
    }
  }
  render() {
    return (
      <div className='first'>
        <h1>Styling using functional and classcomponent</h1>
        <div className='second'>
          <button  onClick={()=>this.setState({
            click1: !this.state.click1
          })}>Click Here to see Classcomponent</button>
          <button onClick={()=>this.setState({
            click2: !this.state.click2
          })}>Click Here to see functionalcomponent</button>
          
        </div><div className='third'>
            {this.state.click1 && <Classcomponent/>}
            {this.state.click2 && <Functioncomponent/>}
          </div>
      </div>
    )
  }
}

export default App
