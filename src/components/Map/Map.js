import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Map extends Component {


    render(){
        return(
            <div>
            <div>This is the Map component</div>
           <Link to="/"><button>To Home</button></Link> 
          <Link to="/Login"><button>To Login</button></Link>
          <Link to="/Profile"><button>To Profile</button></Link> 
       </div>
        )
    }
}

export default Map;