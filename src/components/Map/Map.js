import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from 'axios'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mapInformation: [],
      loading: true 
    }
  }

  getInfo() {
    axios.get('/api/comments').then(({data}) => {
      console.log(data)
      this.setState({
        mapInformation: data, 
        loading: false
      })
    })
  }

  render() {
    let random = this.state.mapInformation.map((info, i) => {
      return(
       <div key={i}>

         <a href={info.link} target="_blank">{info.postTitle}</a>
         
       </div>
        
      )
      
    })
    return (
      <div>
        {!this.state.loading === true ?
        <div>
<h1>Map Page</h1>
        <button onClick={() => this.getInfo()}>Click Me</button>
        {random}
        </div>
        
        :
        <div>
         
          <div>Waiting for your data....</div>
          <img
            src="loading.svg"
          />
        </div>
        } 
        
        

      </div>
    );
  }
}

export default Map;