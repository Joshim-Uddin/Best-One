import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Dashboard from '../Pages/Dashboard';
import Customer from '../Pages/Customer';
import Login from '../Pages/Login';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home/Home';
import AllProducts from '../Pages/AllProducts';

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
                element: <AllProducts />
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