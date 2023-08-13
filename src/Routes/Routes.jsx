import React, { createContext, useState } from 'react';
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
                path: 'allproducts',
                element: <AllProducts />
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
export const openContext = createContext()
const Routes = () => {
    const [open, setOpen] = useState(false)
    const contextInfo = {open, setOpen}
    console.log(open)
    return (
        <openContext.Provider value={contextInfo}><RouterProvider router={router} ></RouterProvider></openContext.Provider>
    );
};

export default Routes;