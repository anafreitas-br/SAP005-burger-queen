import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/login'
import Register from '../pages/register'
import Hall from '../pages/hall'
import Breakfast from './Breakfast'
import Burger from './Burger'
import Kitchen from '../pages/kitchen'
import NotFound from './NotFound'
import Historic from '../components/Historic'
import OrderKitchen from '../components/OrderKitchen'
import PrivateRoute from './PrivateRoute'

const Routes = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route component={Login} exact path='/' />
        <Route component={Register} exact path='/register' />
        <PrivateRoute component={Hall} exact path='/hall' />
        <PrivateRoute component={Kitchen} exact path='/kitchen' />
        <PrivateRoute component={Breakfast} exact path='/breakfast' />
        <PrivateRoute component={Burger} exact path='/burger' />
        <PrivateRoute component={Historic} exact path='/historic' />
        <PrivateRoute component={OrderKitchen} exact path='/orderkitchen' />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </>
)

export default Routes

