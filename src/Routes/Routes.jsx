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
import NewSeller from '../Pages/Newseller/NewSeller';
import Registration from '../Pages/Newseller/Registration';
import SellerLogin from '../Pages/Newseller/SellerLogin';
import SupportPage from '../Pages/SupportPage';
import SellerRoutes from './SellerRoutes';
import SellerDashboard from '../Pages/Newseller/SellerDashboard';

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
            },
            {
                path: '/support',
                element: <SupportPage />
            }
        ]
    },
    {
        path:"/newseller",
        element: <NewSeller />,
        children:[
            {
                path: '',
                element: <Registration />
            },
            {
                path: 'sellerlogin',
                element: <SellerLogin />
            }
        ]

    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '',
                element: <SellerRoutes><SellerDashboard /> </SellerRoutes>
            },
            {
                path: 'addproduct',
                element: <SellerRoutes><AddProduct /> </SellerRoutes>
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