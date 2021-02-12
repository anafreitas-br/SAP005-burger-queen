import React from 'react'

import { Route, Redirect } from 'react-router'

const PrivateRoute = props => {
    const isLogged = !!localStorage.getItem('app-token')
    return isLogged ? <Route {...props}/> : <Redirect to={{pathname:"/", state: {from: props.location}}}/>
}

export default PrivateRoute
