import React from 'react'
import { Router, Switch, Route } from 'react-router'
import Login from '../pages/login'
import Register from '../pages/register'
import Hall from '../pages/hall'
import Kitchen from '../pages/kitchen'
import { history } from '../history'




const Routes = () => (
    <Router history = {history}>
        <Switch>
            <Route component = {Login} exact path='/'/>
            <Route component = {Register} exact path='/register'/>
            <Route component = {Hall} exact path='/hall'/>
            <Route component = {Kitchen} exact path='/kitchen'/>
        </Switch>
    </Router>
)

export default Routes
