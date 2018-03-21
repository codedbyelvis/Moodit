import React, { Component } from "react";
import { Navbar, NavbarBrand, NavItem, NavLink, Collapse } from "mdbreact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Map from "./components/Map/Map";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true
    };
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar color="unique-color-dark" dark>
              <NavbarBrand href="#">
                <img
                  src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
                  height="30"
                />
              </NavbarBrand>
              <Collapse isOpen={this.state.collapse} navbar>
                <NavItem active>
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/Profile">
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/Map">
                    Map
                  </NavLink>
                </NavItem>
              </Collapse>
            </Navbar>
            <Switch>
              <Route component={Home} exact path="/" />
              <Route component={Login} path="/Login" />
              <Route component={Profile} path="/Profile" />
              <Route component={Map} path="/Map" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
