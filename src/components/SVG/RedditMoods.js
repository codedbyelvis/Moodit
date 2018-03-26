//---Do not remove ----ESLint commands to prevent it from throwing hissy fit-------------------
/*global a*/
/*global TweenMax*/
/*global Bounce*/
/*global Power3*/
//-----------End of ESLint commands------------------------------------------

import React, { Component } from 'react'
import './RedditMoods.css'



const antenna_arm_path = "M101.08,81.08c-.28-3.77-.87-5.67,1-10.34-.63.7-.31.51-.9.85-2.55,1.48-7.77-1-10.45-1.65-5.76-1.37-12.43-5.5-15,1.15-2.87,7.49-7.43,24.29-9.47,24.3-.53.09,5.53.87,8.6-.06-2.38-.63,5-21.85,6.16-23,.67-.67,11.11,2.52,13.74,3.14A9.7,9.7,0,0,1,101.08,81.08Z";

const body_path = "M129.06,46.05a13.94,13.94,0,0,0-15.31-5.74c-3.67,1.08-5.12,3.26-8.89,1.3a72.93,72.93,0,0,0-10.8-4.71C87.7,34.79,80.89,34.57,74.63,33c-1.76-.45-2.78-1.31-4.89-1.16-1.38.1-1.37.51-2.58,1-1.51.59-3.19.43-4.8.56a72,72,0,0,0-22.81,5.39c-2.5,1.07-6.29,4.25-9,3.88-1.38-.18-2.81-1.46-4.12-2a13.67,13.67,0,0,0-5.1-.88A14.26,14.26,0,0,0,8,50.4c-2,7.39,3.82,11.27,5.54,17.87,1,3.72,1,7.57,2.32,11.22a28.08,28.08,0,0,0,5.5,9C26.88,94.75,34.16,98.78,41.72,102c-7.95,5.34-13.07,12.47-13.35,22.32-.23,8.09,2.18,16.76,8.73,22,3.07,2.45,7.2,3.36,9,7.15.3.66,1.3,2.78,1,3.49-.36.87-5.2.83-6.27,1.18-3.94,1.29-7.52,3.93-9.08,7.88-1,2.62-1.84,7.54,1.31,8.83,1.74.72,57.56.22,69.72.16,2.63,0,4.95-1.22,5.14-4.06.17-2.68-1.18-5.44-2.67-7.58a10.8,10.8,0,0,0-6.8-4.8c-1.33-.28-2.67-.49-4-.84-.75-.19-2.14-.45-2.51-1.25-1.38-2.9,2.9-6.25,4.83-7.12,8.87-4,13.56-13.81,13.65-23.23.09-10.6-5-18.22-13.4-24.12,11.32-5.09,23.08-12.28,26.56-25.09.86-3.17.09-6.46.74-9.49.51-2.35,2.76-3.21,4.21-5.11A14.13,14.13,0,0,0,129.06,46.05ZM14.4,59.83c-5.77-6.56.58-17,9-15.39,5.92,1.13.71,3.93-1.49,6.36a31.58,31.58,0,0,0-4.21,5.82C17,57.85,16.07,61.73,14.4,59.83Zm18.7,69.72a22.75,22.75,0,0,1,7.68-21.26A127.73,127.73,0,0,0,43.42,145,21.14,21.14,0,0,1,33.1,129.55Zm3.74,41.19c-2.63,0-1-3.1-.26-4.32a10.35,10.35,0,0,1,6.28-4.27c7.35-1.9,9.27,3.41,13.07,8.58C49.57,170.73,43.21,170.72,36.84,170.74Zm66.34-2.11c1,3.49-5.88,2.09-7.88,2.09-4.3,0-8.6,0-12.91,0,2-2.19,3.53-4.58,5.3-6.91,1.55-2.06,3.29-2.29,5.87-2.07C97.68,162.09,102,164.44,103.18,168.63Zm-17.83-9.95c-2.43,4.84-5.81,10-11.29,11.65-5.1,1.49-10.94.6-14.89-3.06-9.29-8.64-12.37-24.43-13.64-36.44a110.3,110.3,0,0,1,.09-23.05c.45-4.29.68-4.28,4.74-3.3a82.39,82.39,0,0,0,11,1.88,79,79,0,0,0,22.08-.89c1.93-.35,7-2.64,8.62-1.58s1.17,7.22,1.27,8.73C94.31,128.23,92.44,144.57,85.35,158.68Zm12.09-51.15c12,10.09,11.17,29.41-2.36,37.72A121.63,121.63,0,0,0,97.44,107.53ZM114.1,85c-11.47,13.37-31,18-47.91,17.1-15.7-.84-34.23-5.67-43.58-19.49-10.86-16,2.15-32.23,17-39.1,16-7.38,36-8.15,52.65-2.48,9.55,3.26,19.09,8.48,24.43,17.37S120.69,77.37,114.1,85ZM124.33,60.3c-1.58,1.89-2.4-1.73-2.93-2.78A31.15,31.15,0,0,0,117.75,52c-1.92-2.33-8.22-5.76-3-7.31C124.12,41.92,130.25,53.25,124.33,60.3Z";

// const madPath =

// const happyPath = 

class RedditMoods extends Component {
	
	constructor(){
		super();
		this.state = {
			face: 0
		}
		// this.body_path = null;
		// this.antenna_arm_path = null;
		this.svgTween = null;
	}
	
	componentDidMount(){
		console.log(this.state.face)
		this.svgTween = TweenMax.to('#base_face', 0.5, {
			morphSVG:{shape: '#angry_face', shapeIndex: 12},
			ease:Power3.easeOut,
			paused:true
		});
	}
	
	render(){

		const base_face = <g id="base_face">
		<path id="mouth" className="reddit_purple" d="M85.61,147.11c-5.22,4.74-15.82,5.27-22.45,4a24.52,24.52,0,0,1-6.35-2.09c-1-.49-4.39-3.38-5.66-3.12-5.14,1.06.54,5.65,2.31,6.65,6.77,3.84,16.07,3.91,23.57,2.75,3.65-.56,8.81-1.74,11.4-4.68C90.85,147.91,89,144.07,85.61,147.11Z" transform="translate(-7.6 -67.41)"/>
		<path id="eye_r" className="reddit_orange" d="M88.2,117a8.23,8.23,0,0,0-8.29,8.4,8.32,8.32,0,0,0,8.26,8.47,8.47,8.47,0,0,0,8.48-8.56A8.33,8.33,0,0,0,88.2,117Z" transform="translate(-7.6 -67.41)"/>
		<path id="eye_l" className="reddit_orange" d="M59.28,125.33a8.41,8.41,0,1,0-8.49,8.56A8.45,8.45,0,0,0,59.28,125.33Z" transform="translate(-7.6 -67.41)"/>
		</g>;

//In order to morph faces, I need to assign each face element the exact same number prefix and append each wtih an additional number 0 through however many face features there are. This will allow me to use for loop to tween between faces. Example: the angry face is prefix 1. Each element is appended with number. Example: left-eye is 1, right-eye is 2. Thus when I tween from angry to happy (which is prefixed with 0), it will look something like this in the for loop: 
// for (i=0; i<numberOfFaces.length; i++) {
// 	TweenMax.to("#1"+i, 1, {
// 	  morphSVG:"#0"+i, 
// 	  ease:Power2.easeInOut});
// 	}
//--Alterative-- create const variables like const eyebrowL, etc and use them in the path id
// const 	eybrowL,
// 		eybrowR,
// 		eyeL,
// 		eyeR,
// 		mouth
//Then when 

	
		const angry_face = <g id="angry_face">  
					<path id="brow_l" className="reddit_purple" d="M37.23,50.59c2.55-2.54,8.2-2.09,9.93-1.81,6.48,1.07,17,9.3,15.18,13.79-.82,2-8.94-6.07-13.62-7.8S37.07,53.13,37.23,51" transform="translate(-7.6 -3.1)"/>
					<ellipse id="eye_l" className="reddit_orange" cx="46.29" cy="66.28" rx="6.24" ry="8.94"/>
					<path id="brow_r" className="reddit_purple" d="M102.28,50.59c-2.54-2.54-8.2-2.09-9.93-1.81-6.48,1.07-17,9.3-15.18,13.79.82,2,9-6.07,13.62-7.8s11.65-1.64,11.49-3.77" transform="translate(-7.6 -3.1)"/>
					<ellipse id="eye_r" className="reddit_orange" cx="78.03" cy="66.28" rx="6.24" ry="8.94"/>
					<path id="mouth" className="reddit_purple" d="M68.49,85.38c15.34-.4,18.6,14.76,15.82,13.94s-4.58-4.92-14-4.92-13.5,4.42-15.43,4.1S55.94,85.7,68.49,85.38Z" transform="translate(-7.6 -3.1)"/>
					</g>;
		

	 return (
		<div>
            <svg id="Layer_6" data-name="Layer 6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136.66 171.86">
                
            <defs>
            <filter id="goo" height="300%" y="-100%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.9" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 17 -7" result="cm" />

            </filter>
            </defs>
    
                <title>redditlogo</title>
                
            <g>
                <path ref={path => this.antenna_arm_path =path} id="antenna_arm" className="reddit_purple" d={antenna_arm_path} transform="translate(-7.6 -65.44)"/>
                <path ref={path => this.body_path =path} id="main_body" className="reddit_purple" d={body_path} transform="translate(-7.6 -3.1)"/>
            </g>

            <circle id="antenna_circle-2" data-name="antenna_circle" className="antenna_circle" cx="103.99" cy="11.35" r="9.35"/>

			

		{this.state.face === 0 ? base_face : angry_face}
            
            
        </svg>

 			<h1 onClick={ () => this.setState({face:1}) }>Mad</h1>
 			<h3>or</h3>
 			<h1 onClick={ () => this.setState({face:0}) }>Happy</h1>
		</div>
		);
	} 
}
export default RedditMoods


