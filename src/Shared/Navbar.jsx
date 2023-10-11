import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getCart } from '../fakedb';
import { FaBars, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const [users, setUsers] = useState([])
    useEffect(() =>{
        fetch('/users.json').then(res=>res.json()).then(data=>setUsers(data));
    })
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

    const [cart, setCart]= useState([])
    useEffect(() => {
        const cartItems = getCart()
        setCart(cartItems)
    }, [])
    
    let items = 0;
    for(let x in cart){
             items += cart[x]        
    } 
    
    const navOptions = (
      <nav className={colorChange?'max-[600px]:hidden flex absolute z-50 bg-red-950 justify-between px-10 items-center py-8 uppercase md:sticky md:top-0':'flex md:flex-row flex-col justify-between px-10 items-center py-8 z-99 uppercase md:sticky md:top-0'}>
      <ul className='flex md:flex-row flex-col md:gap-5 gap-3 items-end text-white'>
          <li className='custom w-32 text-center'> <Link to='/home'>Home</Link> </li>
          <li className='custom w-32 text-center'><Link to='allproducts'>Products</Link> </li>
          <li className='custom w-32 text-center'><Link to='cart'>Cart <span className="badge badge-primary">{items}</span></Link></li>
          <li className='custom w-32 text-center'><Link to='dashboard'>Dashboard</Link></li>
          <li className='custom w-32 text-center'><Link to='customer'>Customer</Link></li>
      </ul>
  </nav>
      );

    
    
   
    

    
    return (
        <>
      <nav className="max-[600px]:hidden flex items-center justify-between h-28 lg:px-16 px-8 bg-[#03203C] text-white">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
          <h3 className={colorChange?"md:text-3xl text-2xl text-white font-extrabold font-['pacifico']":"md:text-3xl text-2xl text-black font-extrabold font-['pacifico']"}>Best <span className='text-violet-600'>One</span></h3>
          </Link>
        </div>
        <div className="flex items-center gap-4 text-lg">{navOptions}</div>
      </nav>
      <div className="min-[600px]:hidden bg-[#03203C] text-white">
        <div className="flex justify-between items-center p-4">
          <FaBars onClick={() => setClicked(!clicked)} />
          <Link to="/">
            <h4 className="text-xl font-semibold font-['logo']">
              Best <span className='text-violet-600'>One</span>
            </h4>
          </Link>
        </div>
        <div
          className={
            clicked
              ? `flex flex-col items-center gap-2 relative top-0 left-0 pb-3`
              : `flex flex-col gap-2 ps-4 absolute -top-72`
          }
        >
          {navOptions}
        </div>
      </div>
    </>
        // <nav className={colorChange?'max-[600px]:hidden flex absolute z-50 bg-red-950 justify-between px-10 items-center py-8 uppercase md:sticky md:top-0':'flex md:flex-row flex-col justify-between px-10 items-center py-8 z-99 uppercase md:sticky md:top-0'}>
        //     <h3 className={colorChange?"md:text-3xl text-2xl text-white font-extrabold font-['pacifico']":"md:text-3xl text-2xl text-black font-extrabold font-['pacifico']"}>Best <span className='text-violet-600'>One</span></h3>
        //     <ul className='flex md:flex-row flex-col md:gap-5 gap-3 items-end text-white'>
        //         <li className='custom w-32 text-center'> <Link to='/home'>Home</Link> </li>
        //         <li className='custom w-32 text-center'><Link to='allproducts'>Products</Link> </li>
        //         <li className='custom w-32 text-center'><Link to='cart'>Cart <span className="badge badge-primary">{items}</span></Link></li>
        //         <li className='custom w-32 text-center'><Link to='dashboard'>Dashboard</Link></li>
        //         <li className='custom w-32 text-center'><Link to='customer'>Customer</Link></li>
        //     </ul>
        // </nav>
    );
};

export default Navbar;