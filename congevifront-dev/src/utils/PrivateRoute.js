import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    return(
        <Route {...rest}>{user ? children : <Redirect to='/login' />}</Route>
    )
}

export default PrivateRoute;