import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login'
import Map from './components/Map/Map'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

export default (
    <HashRouter>
        <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Login} path="/Login" />
            <Route component={Profile} path="/Profile" />
            <Route component={Navbar} path="/Navbar" />
            <Route component={Map} path="/Map" />
        </Switch>
    </HashRouter>


)