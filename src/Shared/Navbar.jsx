import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-between px-10 items-center py-8'>
            <h3 className='text-3xl font-bold'>Best One</h3>
            <ul className='flex gap-5'>
                <li> <Link to='/'>Home</Link> </li>
                <li>Product</li>
                <li>Cart</li>
                <li>Dashboard</li>
                <li>Customer</li>
            </ul>
        </nav>
    );
};

export default Navbar;