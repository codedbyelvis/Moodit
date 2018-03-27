import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../ducks/reducer";
import { connect } from "react-redux";
import PLine from "../PaulsChart/PLine";
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: ""
    };
  }

  render() {
    console.log(this.props.watsonToneName.trim().split("  "));
    let stringNum = this.props.watsonNum.trim().split("  ");
    let numbs = stringNum.map(num => {
      return parseInt(num, 10);
    });
    console.log(numbs);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 green">
            <img src={this.props.picture} alt="" />
          </div>

          <div className="col-md-9 blue">
            <h1>Hello, {this.props.user}</h1>
            <h3>
              Watson has done a thorough analysis of your Reddit comments and
              discovered some interesting insights. Here's your Moodit profile
            </h3>
            <h3>this is the time: {this.props.time}</h3>
            <h3>{this.props.watsonNum}</h3>
            <h3>Label: {this.props.watsonToneName}</h3>
          </div>
        </div>

        <div className="row">
          <div className="col red">
            <PLine data={this.state.reddit} />
          </div>
        </div>
      
      <div id="suggested_reads" className="row">
    <div className="col">
      
    <Card cascade>
    <CardImage tag="div">
        <div className="view gradient-card-header blue-gradient">
            <h2 className="h2-responsive">Title of Reddit Post</h2>
            <p>Subreddit Name</p>
        </div>
    </CardImage>
    <CardBody>
          
          <CardText>Comment 1 blah blah blah blah blah.</CardText>
          <CardText>Comment 2 blah blah blah blah blah.</CardText>
          <CardText>Comment 3 blah blah blah blah blah.</CardText>
          <Button href="#">Read more</Button>
    </CardBody>
</Card>
    
    </div>
    <div className="col">
      
<Card cascade>
    <CardImage tag="div">
        <div className="view gradient-card-header blue-gradient">
            <h2 className="h2-responsive">Title of Reddit Post</h2>
            <p>Subreddit Name</p>
        </div>
    </CardImage>
    <CardBody>
          
          <CardText>Comment 1 blah blah blah blah blah.</CardText>
          <CardText>Comment 2 blah blah blah blah blah.</CardText>
          <CardText>Comment 3 blah blah blah blah blah.</CardText>
          <Button href="#">Read more</Button>
    </CardBody>
</Card>
    
    </div>
    <div className="col">
    <Card cascade>
    <CardImage tag="div">
        <div className="view gradient-card-header blue-gradient">
            <h2 className="h2-responsive">Title of Reddit Post</h2>
            <p>Subreddit Name</p>
        </div>
    </CardImage>
    <CardBody>
          
          <CardText>Comment 1 blah blah blah blah blah.</CardText>
          <CardText>Comment 2 blah blah blah blah blah.</CardText>
          <CardText>Comment 3 blah blah blah blah blah.</CardText>
          <Button href="#">Read more</Button>
    </CardBody>
</Card>
    </div>
  </div>

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
  };
}
export default connect(mapStateToProps, { getUser })(Profile);
