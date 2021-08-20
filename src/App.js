import "./App.css"
import React, { Component } from 'react'
import Profile from "./Components/Profile/Profile"

export default class App extends Component {
  state={
    show:false,
    
  }

  
  
  toggle=()=>{
    this.setState({
      show:!this.state.show
    })
  }


  
  render() {
    
    return (
      <div className="profile">

        <button onClick={this.toggle}>
          {this.state.show? "Hide profile": "Show profile"}
        </button>

        {this.state.show && <Profile />}
        

      </div>
    )
  }
}