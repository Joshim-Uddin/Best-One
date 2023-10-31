import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Dashboard from '../Pages/Dashboard';
import Customer from '../Pages/Customer';
import Login from '../Pages/Login';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home/Home';
import AllProducts from '../Pages/AllProducts';
import SignUp from '../Pages/SignUp';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
    {
        path: '/',
        element : <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/allproducts',
                element: <PrivateRoutes><AllProducts /></PrivateRoutes>
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/customer',
                element: <Customer />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    },
        
    
])
const Routes = () => {
    return (
        <RouterProvider router={router} ></RouterProvider>
    );
};

export default Routes;