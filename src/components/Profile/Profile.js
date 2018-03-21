import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Profile extends Component {


    render(){
        return(
            <div>
            <div>This is the Profile component</div>
           <Link to="/"><button>To Home</button></Link> 
         
          <Link to="/Map"><button>To Map</button></Link> 
       </div>
        )
    }
}

export default Profile;