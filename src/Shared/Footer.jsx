import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        
    <footer className="bg-gradient-to-r from-[#0D0D0D] via-[#2D2D2D] to-[#4D4D4D] text-white p-10 grid md:grid-cols-4 grid-cols-1 items-center">
        <div>
            <h2 className='text-3xl font-bold uppercase mb-3'>Best <span className='text-yellow-300'>One</span></h2>
            <p>Best One Cosmetics Corner<br/>Selling Authorized & Quality Products</p>
        </div> 
        <div className='flex flex-col gap-3 my-3'>
            <span className="md:footer-title text-2xl">Services</span> 
            <Link className="link link-hover">Branding</Link> 
            <Link className="link link-hover">Design</Link> 
            <Link className="link link-hover">Marketing</Link> 
            <Link className="link link-hover">Advertisement</Link>
        </div> 
        <div className='flex flex-col gap-3 my-3'>
            <span className="md:footer-title text-2xl">Company</span> 
            <Link className="link link-hover">About us</Link> 
            <Link className="link link-hover">Contact</Link> 
            <Link className="link link-hover">Jobs</Link> 
            <Link className="link link-hover">Press kit</Link>
        </div> 
        <div className='flex flex-col gap-3 my-3'>
            <span className="md:footer-title text-2xl">Legal</span> 
            <Link className="link link-hover">Terms of use</Link> 
            <Link className="link link-hover">Privacy policy</Link> 
            <Link className="link link-hover">Cookie policy</Link>
        </div>
    </footer>
    
    );
};

export default Footer;