import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { getUser } from '../../ducks/reducer';

import { Input, Button } from "mdbreact";
// import SvgReddit from "../SVG/SvgReddit";
import RedditMoods from "../SVG/RedditMoods";
import MoodditText from "../SVG/MoodditText";
// import MyNavbar from '../Navbar/navBar'
import img1 from "./bgimg.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import happy_reddit from "../../assets/happy_reddit.svg";
import littleReddit from './alpha.gif'
import video1 from '../../assets/home_vid.mp4'
import './Home.css'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
        newUser: ""
    }
}

  testEndpoint() {
    console.log(this.state.fakeData);
    axios.get("/api/test").then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className="home_body" >
<div >
  
          <div className="home_hero">
            <video src={video1} autoPlay="true" loop > </video>
            <img src={img1} />
          </div>
  
          <div className="home_profile_login">
          <div></div>
  
  
            <img src={littleReddit} />
  
  
            <div className="home_login" >
  
              <form className="home_form" >
                <h1 >What's your moodit?</h1>
                <h1 >Let Watson analyze you.</h1>
  
                <Input
                  label="Reddit username"
                  icon="user"
                  validate
                  error="wrong"
                  success="right"
                  className="inputModal2_Title"
                  placeholder="username"
                  onChange={e => this.setState({ newUser: e.target.value })}
                />
    
                <div className="text-center">
                  <Link to="/profile">
                    <Button
                      color="primary"
                      onClick={() => this.props.getUser(this.state.newUser)}
                      >
                      Search
                    </Button>
                  </Link>
                </div>
              </form>
            </div>
  
  
                    <div></div>
          </div>
  
        <div className="home_section3">
        
  
        </div>

</div> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
      user
  }
}

export default connect(mapStateToProps, { getUser })(Home);
