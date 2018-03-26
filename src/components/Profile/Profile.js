import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getUser } from '../../ducks/reducer';
import { connect } from 'react-redux'

class Profile extends Component {
  constructor(props){
    super(props)
      this.state = {
        newUser: ''
      }
  }

  

  render() {
  
    return (
      <div>
        <h1>Profile Page</h1>
        <div>{this.props.user}</div>
        <div>this is the time: {this.props.time}</div>
        <div>{this.props.watsonNum}</div>
        <div>{this.props.watsonToneName}</div>
        <img src={this.props.picture} alt=""/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { user, time, picture, watsonNum, watsonToneName } = state;
  return {
      user: user,
      time: time,
      picture: picture,
      watsonNum: watsonNum,
      watsonToneName: watsonToneName
  }
}
export default connect(mapStateToProps, { getUser })(Profile);
