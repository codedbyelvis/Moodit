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
    console.log(this.props.watsonToneName.trim().split("  "))
  let stringNum = this.props.watsonNum.trim().split("  ")
  let numbs = stringNum.map((num)=>{
    return parseInt(num, 10)
    
  })
  console.log(numbs)
    return (
      <div>
        <h1>Profile Page</h1>
        <div>{this.props.user}</div>
        <div>this is the time: {this.props.time}</div>
        <div>{this.props.watsonNum}</div>
        <div>Label: {this.props.watsonToneName}</div>
      
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
