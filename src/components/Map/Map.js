import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import MyCard from '../Card/MyCard'
import './Map.css'
import MapCard from '../Card/MapCard'


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapInformation: [],
      loading: false
    };
  }


  componentDidMount() {
    axios.get("/api/comments").then(({ data }) => {
      console.log(data);
  
    });
    let mapData = [] ;

    mapData.map( (item) => {
      return (

      <div class="map_card">
        <div className="card_header">
        <h2>Title of the Reddit Post</h2>
        </div>
    
        <div class="card__details">
        
        <p class="subreddit_title">Subreddit Title</p>
        <p class="post_comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
        <p class="post_comment">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, excepturi!</p>
      </div>
    </div>

      );
    })

    


  }

  render() {
    
    return (
      <div>
        <div className="cardGrid" >
        
        <MapCard />

          </div>
      </div>
    );
  }
}

export default Map;


// Jose Jaime Carvajal [9:40 AM]
// import React, { Component } from "react";
// // import { Link } from "react-router-dom";
// import axios from 'axios'

// class Map extends Component {
//  constructor(props) {
//    super(props)
//    this.state = {
//      mapInformation: [],
//      loading: true
//    }
//  }

//  getInfo() {
//    axios.get('/api/comments').then(({data}) => {
//      console.log(data)
//      this.setState({
//        mapInformation: data,
//        loading: false
//      })
//    })
//  }

//  render() {
//    let random = this.state.mapInformation.map((info, i) => {
//      return(
//       <div key={i}>

//         <a href={info.link} target="_blank">{info.postTitle}</a>
       
//       </div>
       
//      )
     
//    })
//    return (
//      <div>
//        {!this.state.loading === true ?
//        <div>
// <h1>Map Page</h1>
//        <button onClick={() => this.getInfo()}>Click Me</button>
//        {random}
//        </div>
       
//        :
//        <div>
       
//          <div>Waiting for your data....</div>
//          <img
//            src="loading.svg"
//          />
//        </div>
//        }
       
       

//      </div>
//    );
//  }
// }

// export default Map;