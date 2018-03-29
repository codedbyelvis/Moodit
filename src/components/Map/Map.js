import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mapInformation: []
    }
  }

  getInfo() {
    axios.get('/api/comments').then(({data}) => {
      console.log(data)
      this.setState({
        mapInformation: data
      })

    })

  }
  render() {
    let random = this.state.mapInformation.map((info, i) => {
      return(
       <div key={i}>

         <div key={i} >{info.postTitle}</div>
       </div>
        
      )
      
    })
    return (
      <div>
        <h1>Map Page</h1>
        <button onClick={() => this.getInfo()}>Click Me</button>
        
        {random}
       

      </div>
    );
  }
}

export default Map;