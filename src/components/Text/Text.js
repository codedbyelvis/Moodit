import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { getText } from '../../ducks/reducer';
// import { Input, Button } from "mdbreact";
import './Text.css'

class Analyze extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    render() {
        return (
            <div>
                <div className='myinput'>
                        <p className="text_here">Analyze your own text</p>
                        <textarea 
                            className="text_input"
                            placeholder="Your text here..."
                            onChange={(e) => this.setState({ text: e.target.value })} />
                            {/* <Link to='/'> */}
                                <button className="button_text" onClick={() => this.props.getText(this.state.text)}>Analyze</button>
                        {/* </Link> */}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {text} = state;
    return {
        text
    }
}

export default connect(mapStateToProps, {getText})(Analyze);


// export default Text