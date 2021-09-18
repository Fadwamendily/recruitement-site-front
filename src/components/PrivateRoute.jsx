import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectautheduser, selectisauth } from '../features/users/userSlice';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {

    const isauth = useSelector(selectisauth)
    const user = useSelector(selectautheduser)
    return (
        <Route {...rest} render={props => {
            if (!isauth)
                return <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />

            if (!roles.includes(user.__t))

                return <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }} />
            return <Component {...props} />
        }} />
    )
}

export default PrivateRoute;