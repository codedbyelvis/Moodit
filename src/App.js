import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '7tzazd',
      sampleData: {id: 7, post: "I know a fair amount of procedural PHP and I decided I might at least learn the basics of object oriented php as well, if nothing else just to compare and see what it's like."}
    }
  }

testEndpoint(){
  console.log(this.state.fakeData)
  axios.get('/api/test')
  .then( res => {
    console.log(res)
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=>this.testEndpoint()} >
          Test Endpoint
          </button>
      </div>
    );
  }
}

export default App;
