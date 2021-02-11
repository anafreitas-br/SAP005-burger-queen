import React from 'react'
import { Router, Switch, Route } from 'react-router'
import Login from '../pages/login'
import Register from '../pages/register'
import Hall from '../pages/hall'
import Kitchen from '../pages/kitchen'
import { history } from '../history'
import NotFound from './NotFound'
import PrivateRoute from './PrivateRoute'



const Routes = () => (
    <Router history = {history}>
        <Switch>
            <Route component = {Login} exact path='/'/>
            <Route component = {Register} exact path='/register'/>
            <PrivateRoute component={Hall} exact path="/hall"/>
            <PrivateRoute component={Kitchen} exact path="/kitchen"/>
            <PrivateRoute component={NotFound}/>
            
        </Switch>
    </Router>
)

export default Routes
