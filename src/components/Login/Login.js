import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { getUser } from '../../ducks/reducer';

class Login extends Component {
    constructor(props){
        super(props)
        this.state= {
            newUser: ""
        }
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <input
                    className="inputModal2_Title"
                    placeholder="username"
                    onChange={(e) => this.setState({newUser:e.target.value})} />
                <button onClick={()=>this.props.getUser(this.state.newUser)}>GO</button>
              

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}
export default connect(mapStateToProps, { getUser })(Login);
