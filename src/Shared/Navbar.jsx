import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getCart } from '../fakedb';
import { FaBars, FaCartPlus, FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const [users, setUsers] = useState([])
    const {user, loggingOut} = useContext(AuthContext)
    useEffect(() =>{
        fetch('/users.json').then(res=>res.json()).then(data=>setUsers(data));
    })
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 64) {
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
    const logOut = ()=>{
      loggingOut().then(res=>res).catch(err=>console.log(err))
    }

    
    const navOptions = (
      <ul className='md:flex md:flex-row items-end text-black w-full'>
          <Link to='/'><li className='custom md:w-32 h-12 w-full text-center'> Home </li></Link>
          <Link to='/allproducts'><li className='custom md:w-32 h-12 w-full text-center'>Products </li></Link>
          {user?<li onClick={logOut} className='custom md:w-32 h-12 w-full text-center cursor-pointer'>Logout</li>:<Link to='/login'><li className='custom md:w-32 h-12 w-full text-center'>Login</li></Link>}
          <Link to='/dashboard'><li className='custom md:w-32 h-12 w-full text-center'>Dashboard</li></Link>
          <Link to='/customer'><li className='custom md:w-32 h-12 w-full text-center'>Customer</li></Link>
          <Link to='/cart'><li className='custom md:w-32 h-12 w-full text-center mx-auto relative'><FaShoppingCart className='text-3xl mx-auto' /> <span className="absolute top-0 md:right-3 right-[37%] badge badge-warning">{items}</span></li></Link>
      </ul>
      );

    
    
   
    

    
    return (
        <nav>
      <div className='max-[600px]:hidden relative'>
      <div className='flex flex-row justify-between items-center h-24 py-8 px-10 w-full uppercase bg-gradient-to-r from-[#FE5418] via-[#f88204] to-[#f89603] fixed top-0 left-0 right-0 z-50'>
        <div className="py-auto">
         <div className='flex gap-4 text-white mb-2 ps-4'>
         <Link to="/newseller"><h5 className='capitalize'>Become a seller</h5></Link>
         <h5 className='capitalize'>Help & Support</h5>
         </div>
          <Link to="/" className="flex items-center">
          <h3 className="md:text-3xl text-2xl text-white font-extrabold font-['pacifico']">Best <span className='text-violet-700 ps-2'>One</span></h3>
          </Link>
        </div>
        <div className="flex items-center gap-4 text-lg">{navOptions}</div>
      </div>
      </div>
      <div className={clicked?"min-[600px]:hidden relative h-72 mb-16":"min-[600px]:hidden relative"}>
      <div className="bg-red-950 text-white fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center p-4">
          <FaBars onClick={() => setClicked(!clicked)}  className='text-2xl'/>
          <Link to="/">
            <h4 className="text-2xl font-semibold font-['logo']">
              Best <span className='text-violet-600'>One</span>
            </h4>
          </Link>
        </div>
        <div
          className={
            clicked
              ? `pb-4`
              : `flex flex-col gap-2 ps-4 absolute -top-72`
          }
        >
          {navOptions}
        </div>
      </div>
      </div>
    </nav>
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