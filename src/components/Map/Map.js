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

  getComments() {
    this.setState({
      loadingComments: false
    })
  }


  render() {
    let random = this.state.mapInformation.map((info, i) => {
      // if(info.watsonInfo){
      return (
        <div key={i}>
          <div class="album">
            <div className="card_header">
              <a href={info.link} target="_blank">
                {info.postTitle}
              </a>
              <p class="album__artist">{info.subName}</p>

              <img className="comments"
                src="comments.svg"
                onClick={() => this.getComments()}
              /> <p>{info.redditComments.length}</p>
            </div>
            {/* <div>Tones: {info.watsonInfo.document_tone.tones[0].tone_name}</div> */}

            <div class="album__details">
              {!this.state.loadingComments === true ?
                <div>
                  <p class="album__desc">{info.redditComments[0]}</p>
                  <p class="album__desc">{info.redditComments[1]}</p>
                  <p class="album__desc">{info.redditComments[2]}</p>
                </div>
                :
                <div>comments</div>
              }
            </div>
          </div>

        </div>
      )
      // }
    })
    return (
      <div>
        {!this.state.loading === true ?
          <div className="albums" >
            {random}
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

