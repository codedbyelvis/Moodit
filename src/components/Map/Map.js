import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

class Map extends Component {




componentDidMount(){
axios.get('/api/comments').then(resp=>{
  console.log(resp)

})
  
}
  render() {
    return (
      <div>
        <h1>Map Page</h1>
      </div>
    );
  }
}

export default Map;
