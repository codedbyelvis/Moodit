import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Login extends Component {


    render(){
        return(
            <div>
                 <div>This is the Login component</div>
                <Link to="/"><button>To Home</button></Link> 
               <Link to="/Profile"><button>To Profile</button></Link> 
            </div>
           
        )
    }
}

export default Login;