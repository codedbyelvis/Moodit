import React, { Component } from 'react';
import routes from './routes'




class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          {routes}
        </div>
        
      </div>
    );
  }
}

export default App;
