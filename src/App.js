import React, { Component } from "react";
import { Navbar, NavbarBrand, NavItem, NavLink, Collapse } from "mdbreact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Map from "./components/Map/Map";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import MoodditText from "./components/SVG/MoodditText";
// import SvgReddit from "./components/SVG/SvgReddit";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true
    };
  }

  test() {
    console.log('success')
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar 
            className="moodit_nav" 
            color="unique-color-dark" 
            dark 
            expand="lg"
            fixed="top" 
            >
              
                <NavItem>
                  <NavLink className="nav-link-profile moodit_brand_nav" to="/">
                  <MoodditText />
                  </NavLink>
                </NavItem >
                <NavItem>
                  <NavLink className="nav-link-profile" to="/profile">
                    Profile
                  </NavLink>
                </NavItem >
                <NavItem>
                  <NavLink className="nav-link-map" to="/map">
                    Map
                  </NavLink>
                </NavItem>
              
            </Navbar>
            <Switch>
              <Route component={Home} exact path="/" />
              <Route component={Login} path="/login" />
              <Route component={Profile} path="/profile" />
              <Route component={Map} path="/map" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
