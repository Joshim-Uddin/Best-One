import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    console.log(loading)
    const location = useLocation()
    if(loading){
        return (
            <div className="flex justify-center items-center h-screen text-8xl font-bold">
        L{" "}
        <div className="border-[12px] border-dashed border-blue-600 animate-spin h-20 w-20 rounded-full"></div>{" "}
        ading.....
      </div>
        )
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={location}></Navigate>
};

export default PrivateRoutes;