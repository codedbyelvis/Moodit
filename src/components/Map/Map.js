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
      currentComment: '',
      filterBy: 'All',
      noResults: 0,
      currentComments: []
    };
  }

//Change getInfo to componentDidMount when ready to go live.
  compdidmount() {
    axios.get("/api/comments").then(({ data }) => {
      console.log(data);
      this.setState({
        mapInformation: data,
        loading: false
      });
    });
  }


//Use this for fake data. Comment out when ready to go live
  componentDidMount() {
    this.setState({
      mapInformation: jsonResponse,
      loading: false,
      filterBy: 'All'
    })
  }

  
  render() {
    var iterator =0;
    let waitingIcon = "Waiting for state to load";
    let noResults = <div className="no_results"><h2 >Sorry, it appears there were no posts matching that emotion</h2></div>

    let readyToShow = this.state.mapInformation //use this to determine if info has been loaded

    
    let postsToShow = this.state.mapInformation.map((postObj, i) => {
      
      let objTonesArray = postObj.watsonInfo.document_tone.tones
      let toneTags = objTonesArray.map( (toneObj, i) =>{
        return (
          <p className="post_tones" key={i}> {toneObj.tone_name}: {Math.floor((toneObj.score)*100)}% </p>  
        )
      })
      let commentArray = postObj.redditComments
      
      let commentStream = commentArray.map( (comment, i) =>{
        return <p className="comment_in_the_stream" key={i} >{comment}</p>
      })
    
      
      let shouldShow = objTonesArray.filter( (toneObj) => {
        if(this.state.filterBy === "All"){
          return "All"
        } else if(toneObj.tone_name === this.state.filterBy){
          return toneObj.tone_name === this.state.filterBy
        } 
      })

      if(shouldShow.length > 0){

        return (
          <div key={i}>
          <div className="post_card">            
           
           <a href ={postObj.link} target="_blank">
           <div className="_cardHeader">

            <div className="_cardTitle" >
              <h4>{postObj.postTitle}</h4>
            </div>

            <div className="_subreddit" >
            <p>{`subreddit: ${postObj.subName}`}</p>
            <img src="comments.svg" />
               <p>{postObj.redditComments.length}</p>
            </div>
            

             <div className="_emotions" >
            {toneTags}
            </div>

           </div>
           </a>

            <div className="post_comments">
    
                <div className="comment_container" >
                 {commentStream}
                 {/* {this.state.currentComment} */}
                 {/* {this.animatedComments() } */}
                </div>
              
            </div>

                {/* <div className="_readMore">
                <p>read more...</p>
                </div> */}

          </div>

        </div>

        );
      } else {
      iterator++
        console.log(iterator)
      }
    })
    
    

    return (
      <div>
        {!this.state.loading === true ?

        <div>
                <div className="mood_key">
                <h5 onClick={()=>this.setState({filterBy:'Joy'})} className=" key_moods joy" >JOY</h5>
                <h5 onClick={()=>this.setState({filterBy:'Analytical'})} className="key_moods analytical" >ANALYTICAL</h5>
                <h5 onClick={()=>this.setState({filterBy:'Anger'})} className="key_moods anger" >ANGER</h5>
                <h5 onClick={()=>this.setState({filterBy:'Sadness'})} className="key_moods sadness" >SADNESS</h5>
                <h5 onClick={()=>this.setState({filterBy:'Tentative'})} className="key_moods tentative" >TENTATIVE</h5>
                <h5 onClick={()=>this.setState({filterBy:'Confident'})} className="key_moods confident" >CONFIDENT</h5>
                <h5 onClick={()=>this.setState({filterBy:'Fear'})} className="key_moods fear" >FEAR</h5>
                <h5 onClick={()=>this.setState({filterBy:'All'})} className="key_moods all" >SHOW ALL</h5>
                </div>

                <div className="card_grid" >
                { iterator===25 ? noResults : postsToShow  }
                </div>

        </div>
          :
            <div className="shadow">
              <div>Loading...</div>
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

