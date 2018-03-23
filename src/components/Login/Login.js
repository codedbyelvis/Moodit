import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { getUser } from '../../ducks/reducer';
import { Input, Button } from "mdbreact";
import '../../App.css';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newUser: ""
        }
    }

    render() {
        return (
            <div>
                {/* <h1>Login Page</h1>
                <input
                    className="inputModal2_Title"
                    placeholder="username"
                    onChange={(e) => this.setState({newUser:e.target.value})} />
                <button onClick={()=>this.props.getUser(this.state.newUser)}>GO</button> */}

                {/* <h2 className="mb-5">Form login</h2> */}

                <div className='myinput'>
                    <form>
                        <p className="h5 text-center mb-4">Mood Analyzer</p>
                        <Input label="Type Username" icon="user" validate error="wrong" success="right" className="inputModal2_Title"
                            placeholder="username"
                            onChange={(e) => this.setState({ newUser: e.target.value })} />

                        <div className="text-center">
                            <Button color='primary' onClick={() => this.props.getUser(this.state.newUser)}>Search</Button>
                        </div>
                    </form>
                </div>
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
