import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Main from '../Layout/Main';
import Product from '../Pages/Product';
import Dashboard from '../Pages/Dashboard';
import Customer from '../Pages/Customer';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/product',
                element: <Product />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/customer',
                element: <Customer />
            }
        ]
    }
])
const Routes = () => {
    return (
        <RouterProvider router={router} ></RouterProvider>
    );
};

export default Routes;