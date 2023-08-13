import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex md:flex-row flex-col justify-between px-10 items-center py-8 uppercase'>
            <h3 className='md:text-3xl text-2xl font-bold'>Best One</h3>
            <ul className='flex md:flex-row flex-col md:gap-5 gap-3 items-end'>
                <li> <Link to='/'>Home</Link> </li>
                <li><Link to='/product'>Product</Link> </li>
                <li><Link to='/cart'>Cart</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/customer'>Customer</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;