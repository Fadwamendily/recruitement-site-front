import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';
import { selectautheduser, selectisauth } from '../features/users/userSlice';

function PublicRoute({ component: Component, restricted, ...rest }) {

    const isauth = useSelector(selectisauth)
    const user = useSelector(selectautheduser)
    return (
        <Route {...rest} render={props => (
            isauth && restricted ?
                <Redirect to={

                    user.__t === 'entreprise' && '/entreprise'
                    ||
                    user.__t === 'admin' && '/admin'
                    ||
                    user.__t === 'condidat' && '/condidat'
                    ||
                    !user && '/'
                } />
                : <Component {...props} />
        )} />
    )
}

export default PublicRoute