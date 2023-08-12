import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Main from '../Layout/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
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