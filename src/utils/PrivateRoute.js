import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({children, ...rest}) => {
    const isAuthenticated = false
    return(
        <Route {...rest}>{isAuthenticated ? children : <Redirect to='/login' />}</Route>
    )
}

export default PrivateRoute;