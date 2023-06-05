import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PriverRoutes = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PriverRoutes;