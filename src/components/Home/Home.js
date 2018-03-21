import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '7tzazd',
            sampleData: { id: 7, post: "I know a fair amount of procedural PHP and I decided I might at least learn the basics of object oriented php as well, if nothing else just to compare and see what it's like." }
        }
    }

    testEndpoint() {
        console.log(this.state.fakeData)
        axios.get('/api/test')
            .then(res => {
                console.log(res)
            })
    }

    render() {
        return (
            <div>
                <div>This is the home component</div>
               <Link to="/Map"><button>To Map</button></Link> 
               <Link to="/Login"><button>To Login</button></Link> 
                <button onClick={() => this.testEndpoint()} >
                    Test Endpoint
          </button>
            </div>

        )
    }
}

export default Home;