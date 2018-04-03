import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import MyCard from '../Card/MyCard'
import './Map.css'
import jsonResponse from  './data.js'
import MapCard from '../Card/MapCard'

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapInformation: [],
      loading: true,
      loadingComments: true,
      currentComment: ''
    };
  }


  // componentDidMount() {
  //   axios.get("/api/comments").then(({ data }) => {
  //     console.log(data);
  //     this.setState({
  //       mapInformation: data,
  //       loading: false
  //     });
  //   });
  // }


  // componentDidMount() {
  //   axios.get("/api/comments").then(({ data }) => {
  //     console.log(data);
  
  //   });
  //   let mapData = [] ;
  // }

  componentDidMount() {
    this.setState({
      mapInformation: jsonResponse,
      loading: false
    })
  }
  
   
   animatedComments(){
    return "commentStream";
  }
 
  render() {
    let readyToShow = this.state.mapInformation
    let topPosts = this.state.mapInformation.map((postObj, i) => {
      // if(postObj.watsonInfo){
      let commentArray = postObj.redditComments
      // let commentStream = commentArray.map( (comment) =>{
      //   setTimeout( function(){
      //     this.setState({currentComment: comment})
      //   },1000)
      // })
      let commentStream = commentArray.map( (comment) =>{
        return <p>{comment}</p>
      })

      

      return (
        <div key={i}>
          <div class="post_card">            
           
           <a href ={postObj.link} target="_blank">
           <div className="_cardHeader">

            <div className="_cardTitle" >
              <h4>{postObj.postTitle}</h4>
            </div>

            <div className="_subreddit" >
            <p>{`subreddit: ${postObj.subName}`}</p>
            </div>

             <div className="_emotions" >
            <p>JOY: 56% |  ANALYTICAL: 27% </p>
            </div>

            <div className="_comments" >
            <img src="comments.svg" />
               <p>{postObj.redditComments.length}</p>
            </div>

         
           </div>
           </a>


            <div class="post_comments">
              
                <div className="comment_container" >
                 {commentStream}
                 {/* {this.state.currentComment} */}
                 {/* {this.animatedComments() } */}
                </div>
              
            </div>

                <div className="_readMore">
                <p>read more...</p>
                </div>

          </div>
        </div>
      )
    })

    return (
      <div>
        {!this.state.loading === true ?
          <div className="card_grid" >
            {topPosts}
          </div>
          :
          <div className="shadow">
            <img
            className="loading"
              src="loading.svg"
            />
          </div>
        }

      </div>

    );
  }
}
export default Map;

