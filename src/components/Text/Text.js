import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { getText } from '../../ducks/reducer';
import './Text.css'

class Analyze extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    render() {
        let {analyzedTextOverall, analyzedTextSentences, text} = this.props
        let newbox = analyzedTextSentences.map((val, i)=>{
            console.log(val)
            if(val.tones.length>0){
                return(
                    <div className="Analyze_box" key={i}>
                        <p>Sentence Analyzed: {val.text}</p>
                        <p>Tone of your text: {val.tones[0].tone_name}</p>
                        <p>Percentage: {Math.floor((val.tones[0].score)*100)}%</p>
                    </div>
                )
            }
          
        })
        return (
            <div className="Analyze_body">
                <div className='myinput'>
                        <h2 className="text_here">Analyze your own text</h2>
                        <textarea 
                            className="text_input"
                            placeholder="Your text here..."
                            onChange={(e) => this.setState({ text: e.target.value })} />
                            {/* <Link to='/'> */}
                                <button className="button_text" onClick={() => this.props.getText(this.state.text)}>Analyze</button>
                        {/* </Link> */}
                        <div className="Analyze_box_body">
                            {newbox}
                        </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {text, analyzedTextOverall, analyzedTextSentences } = state;
    return {
        text: text, 
        analyzedTextOverall: analyzedTextOverall,
        analyzedTextSentences: analyzedTextSentences

    }
}

export default connect(mapStateToProps, {getText})(Analyze);


// export default Text