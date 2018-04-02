import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import MyCard from '../Card/MyCard'
import './Map.css'


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapInformation: [],
      loading: false
    };
  }

  getInfo() {
    axios.get("/api/comments").then(({ data }) => {
      console.log(data);
      this.setState({
        mapInformation: data,
        loading: false
      });
    });
  }

  render() {
    let random = this.state.mapInformation.map((info, i) => {
      return (
        <div key={i}>
          <a href={info.link} target="_blank">
            {info.postTitle}
          </a>
        </div>
      );
    });
    return (
      <div>
        <div className="albums" >
        
        <div class="album">
                <div className="card_header">
                <h2>Title of the Reddit Post</h2>
                </div>
             
                <div class="album__details">
                  
                  <p class="album__artist">Subreddit Title</p>
                  <p class="album__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
                  <p class="album__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, excepturi!</p>
                </div>
              </div>
        
              <div class="album">
                <div className="card_header">
                <h2>Title of the Reddit Post</h2>
                </div>
             
                <div class="album__details">
                  
                  <p class="album__artist">Subreddit Title</p>
                  <p class="album__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
                  <p class="album__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, excepturi!</p>
                </div>
              </div>
        
              <div class="album">
                <div className="card_header">
                <h2>Title of the Reddit Post</h2>
                </div>
             
                <div class="album__details">
                  
                  <p class="album__artist">Subreddit Title</p>
                  <p class="album__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
                  <p class="album__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, excepturi!</p>
                </div>
              </div>
        
              <div class="album">
                <div className="card_header">
                <h2>Title of the Reddit Post</h2>
                </div>
             
                <div class="album__details">
                  
                  <p class="album__artist">Subreddit Title</p>
                  <p class="album__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
                  <p class="album__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, excepturi!</p>
                </div>
              </div>
        
              <div class="album">
                <div className="card_header">
                <h2>Title of the Reddit Post</h2>
                </div>
             
                <div class="album__details">
                  
                  <p class="album__artist">Subreddit Title</p>
                  <p class="album__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
                  <p class="album__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, excepturi!</p>
                </div>
              </div>


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