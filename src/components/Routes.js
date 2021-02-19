import React from 'react'
import Login from '../pages/login'
import Register from '../pages/register'
import Hall from '../pages/hall'
import Breakfast from '../pages/breakfast'
import Burger from '../pages/burger'
import Kitchen from '../pages/kitchen'
import NotFound from './NotFound'
import PrivateRoute from './PrivateRoute'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Routes = () => (
    <>
    <BrowserRouter>  
        <Switch>
            <Route component = {Login} exact path='/'/>
            <Route component = {Register} exact path='/register'/>
            <PrivateRoute component={Hall} exact path='/hall'/>
            <PrivateRoute component={Kitchen} exact path='/kitchen'/>
            <PrivateRoute component={Breakfast} exact path='/breakfast'/>
            <PrivateRoute component={Burger} exact path='/burger'/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>    
    </>
)



export default Routes

