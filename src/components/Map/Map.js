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
      loading: true,
      loadingComments: true
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

  // getComments() {
  //   this.setState({
  //     loadingComments: false
  //   })
  // }
 
  render() {
    let random = this.state.mapInformation.map((info, i) => {
      // if(info.watsonInfo){
      return (
        <div key={i}>
          <div className="album">
            <div className="card_header">
              <a href={info.link} target="_blank">
                {info.postTitle}
              </a>
              <p className="album__artist">{info.subName}</p>

              <img className="comments"
                src="comments.svg"
              /> <p>{info.redditComments.length}</p>
            </div>

            <div className="album__details">
              <div>
                <div className="readcomments">
                <p className="album__desc">{info.redditComments[0]}</p>
                  <p className="album__desc">{info.redditComments[1]}</p>
                </div>
                  <h5>Read More...</h5>
              </div>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div>
        {!this.state.loading === true ?
          <div className="albums" >
            {random}
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

