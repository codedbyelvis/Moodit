import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { getUser } from '../../ducks/reducer';
import { Input, Button } from "mdbreact";
import '../../App.css';
import './Login.css'
// import '../Home/Home.css'
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

                <div className="home_login" >
                
                            <form>
                              <h1 className = 'getoffthenav'>Wanna checkout your mood?</h1>
                              <h1 >Enter your Reddit username below!</h1>
                            <div className = 'gettothechopa'>
                              <Input
                                icon="user"
                                validate
                                error="wrong"
                                success="right"
                                className="inputModal2_Title"
                                placeholder="username"
                                onChange={e => this.setState({ newUser: e.target.value })}
                              />
                            </div>
                  
                              <div className="text-center">
                                <Link to="/profile">
                                  <Button
                                    color="primary"
                                    onClick={() => this.props.getUser(this.state.newUser)}
                                    >
                                    Search
                                  </Button>
                                </Link>
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
