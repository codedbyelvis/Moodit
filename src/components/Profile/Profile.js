import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile Page</h1>
        <canvas id="barChart"></canvas>
      </div>
    );
  }
}

export default Profile;
