import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Main from '../Layout/Main';
import Product from '../Pages/Product';
import Dashboard from '../Pages/Dashboard';
import Customer from '../Pages/Customer';
import Login from '../Pages/Login';
import Cart from '../Pages/Cart';

const router = createBrowserRouter([
    {
        path: '/',
        element : <Login />
    },
    {
        path: '/home',
        element: <Main />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: 'product',
                element: <Product />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'customer',
                element: <Customer />
            },
            {
                path: 'cart',
                element: <Cart />
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