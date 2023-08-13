import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        
        <nav className={colorChange?'flex md:flex-row flex-col z-99 bg-red-950 justify-between px-10 items-center py-8 uppercase md:sticky md:top-0':'flex md:flex-row flex-col justify-between px-10 items-center py-8 uppercase md:sticky md:top-0'}>
            <h3 className={colorChange?"md:text-3xl text-2xl text-white font-extrabold font-['pacifico']":"md:text-3xl text-2xl text-black font-extrabold font-['pacifico']"}>Best <span className='text-violet-600'>One</span></h3>
            <ul className='flex md:flex-row flex-col md:gap-5 gap-3 items-end text-white'>
                <li className='custom w-32 text-center'> <Link to='/home'>Home</Link> </li>
                <li className='custom w-32 text-center'><Link to='product'>Product</Link> </li>
                <li className='custom w-32 text-center'><Link to='cart'>Cart</Link></li>
                <li className='custom w-32 text-center'><Link to='dashboard'>Dashboard</Link></li>
                <li className='custom w-32 text-center'><Link to='customer'>Customer</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;