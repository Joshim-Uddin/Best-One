import React from 'react';
import { Navigate } from 'react-router-dom';

const SellerRoutes = ({children}) => {
    const role = "seller";

    if(role === "seller"){
        return children;
    }
    <Navigate to='/'></Navigate>
};

export default SellerRoutes;