import React, { Component } from "react";
import { getUser, clearReducer } from "../../ducks/reducer";
import { connect } from "react-redux";
import { Chart } from "react-chartjs-2";
import { Button, Card, CardBody, CardImage, CardText } from "mdbreact";
import axios from "axios";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentWillUnmount() {
    this.props.clearReducer();
  }

  render() {
    if (this.props.watsonNum && this.props.watsonToneName) {
      var ctxB = document.getElementById("barChart").getContext("2d");
      var myBarChart = new Chart(ctxB, {
        type: "bar",
        data: {
          labels: this.props.watsonToneName,
          datasets: [
            {
              label: "# of Votes",
              data: this.props.watsonNum,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    }

    return (
      <div>
        <div className="profile_wrapper">
          <div className="row">
            <div className="col-md-3 ">
              <img className="redditpic" src={this.props.picture} alt="" />
            </div>
            <div className="col-md-9 ">
              <div className="profile_greeting">
                <h1>Hello, {this.props.user}</h1>

                <h3>
                  Watson has done a thorough analysis of your Reddit comments
                  and discovered some interesting insights. Here's your Moodit
                  profile
                </h3>
              </div>
              <canvas id="barChart" />
            </div>
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
export default connect(mapStateToProps, { getUser, clearReducer })(Profile);
