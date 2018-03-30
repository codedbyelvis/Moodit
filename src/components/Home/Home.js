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
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

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
      <div>
        <img src={img1} />

        <div className="myinput">
          <form>
            <p className="h5 text-center mb-4">Mood Analyzer</p>
            <Input
              label="Type Username"
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
