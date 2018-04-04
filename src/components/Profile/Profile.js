import React, { Component } from "react";
import { getUser, clearReducer } from "../../ducks/reducer";
import { connect } from "react-redux";
import { Chart } from "react-chartjs-2";
// import { Button, Card, CardBody, CardImage, CardText } from "mdbreact";
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
   if (this.props.watsonNum && this.props.watsonToneName && this.state.firstLoad) {
     var ctxB = document.getElementById("barChart").getContext("2d");
     var myBarChart = new Chart(ctxB, {
       type: "bar",
       data: {
         labels: this.props.watsonToneName,
         datasets: [
           {
             label: "Percentage of Tone",
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
     let colorPicker = (numbs, watsonTone) =>{
        let color = '';
        console.log(numbs);
        for(let i =0; i < numbs.length; i++){
            var max = Math.max(...numbs);
            var sameIndex = numbs.indexOf(max);
        }
        
        console.log(watsonTone[sameIndex]);
        switch (watsonTone[sameIndex]) {
            case 'Anger':
            console.log('I am Angry.');
            color = `rgba(255, 0, 0, ${max})`;
            break;
            case 'Fear':
            console.log('I am Fearful.');
            color = `rgba(0, 0, 0, ${max})`;            
            break;
            case 'Joy':
            console.log('I am Joyful.');
            color = `rgba(255, 255, 0, ${max})`;
            break;
            case 'Sadness':
            console.log('I am Sad.');
            color = `rgba(0, 0, 255, ${max})`;
            break;
            case 'Analytical':
            console.log('I am Analytical.');
            color = `rgba(255, 128, 0, ${max})`;
            break;
            case 'Confident':
            console.log('I am Confident.');
            color = `rgba(127, 0, 255, ${max})`;
            break;
            case 'Tentative':
            console.log('I am Tentative.');
            color = `rgba(128, 128, 128, ${max})`;
            break;
            default:
            console.log('Sorry, we are out of emotions');
        }
        this.setState({
            color:color,
            firstLoad:false
        })
    }; colorPicker(this.props.watsonNum, this.props.watsonToneName);
   }

   return (
     <div>
            {/* <div style={{backgroundColor: this.state.color}}> */}
       <div className="profile_wrapper">
         <div className="row">
           <div className="col-md-3 ">
             <img className="redditpic" src={this.props.picture} alt="" style={{borderColor: this.state.color}}/>
           </div>
           <div className="col-md-9 ">
             <div className="profile_greeting">
             {!this.state.firstLoad ===true ?
             <div>

               <h1>Hello, {this.props.user}</h1>

               <h3>
                 Watson has done a thorough analysis of your Reddit comments
                 and discovered some interesting insights. Here's your Moodit
                 profile
               </h3>
             </div>
             :
             <div>
               <div className="">Loading...
              
              <img
                className="Profile_loading"
                src="loading.svg"
              />
            </div>
             </div>
             }
             <canvas id="barChart" style={{backgroundColor: ''}}></canvas>
             </div>
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