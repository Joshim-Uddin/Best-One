import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Dashboard from '../Pages/Dashboard';
import Customer from '../Pages/Customer';
import Login from '../Shared/Login';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home/Home';
import AllProducts from '../Pages/Allproducts/AllProducts';
import SignUp from '../Shared/SignUp';
import PrivateRoutes from './PrivateRoutes';
import AddProduct from '../Components/AddProduct';

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
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'addproduct',
                element: <AddProduct />
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