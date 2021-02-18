import React from 'react'

import { Route, Redirect } from 'react-router'
import { isAuthenticated} from './auth'

const PrivateRoute = props => {
    let autentication
    if (isAuthenticated === true) {
        autentication = <Route {...props}/>
    } else { 
        autentication = <Redirect to={{pathname:"/", state: {from: props.location}}}/>
    }
    return autentication
}
export default PrivateRoute
