import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { getUser } from "../../ducks/reducer";
import { connect } from "react-redux";
import { Chart } from 'react-chartjs-2';
import { Button, Card, CardBody, CardImage, CardText } from 'mdbreact';
     

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watsonLabels: [],
      numbs: []
    };
  }
workpls() {
    
    let stringNum = this.props.watsonNum.trim().split("  ");
    let numbs = stringNum.map(num => {
        return parseInt(num, 10);
    });
    
    let watsonTone = this.props.watsonToneName.trim().split('  ')
    console.log(watsonTone);
    
    let watsonNumber = parseInt(this.props.watsonNum[0])

    console.log(typeof this.props.watsonNum);
  
    let watsonLabels = watsonTone.map(item => {
        return item
    })
    console.log('the label',watsonLabels);
    console.log('numbs',numbs);

            
            var ctxB = document.getElementById("barChart").getContext('2d');
            var myBarChart = new Chart(ctxB, {
                type: 'bar',
                data: {
                    labels: watsonLabels,
                    datasets: [{
                        label: '# of Votes',
                        data: numbs,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
        
    }
        
        
        render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 green">
            <img className = 'redditpic' src={this.props.picture} alt="" />
          </div>

          <div className="col-md-9 gre">
            <h1>Hello, {this.props.user}</h1>
            
            <canvas id="barChart"></canvas>
                        

            <h3>
              Watson has done a thorough analysis of your Reddit comments and
              discovered some interesting insights. Here's your Moodit profile
            </h3>
            <button onClick = {() => this.workpls()}>work pls</button>
            <h3>this is the time: {this.props.time}</h3>
            <h3>{this.props.watsonNum}</h3>
            <h3>Label: {this.props.watsonToneName}</h3>
          </div>
        </div>

        <div className="row">
          <div className="col red">
            
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
