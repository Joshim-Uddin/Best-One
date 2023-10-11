import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';
import ProgressBar from "react-scroll-progress-bar";

const Main = () => {
    return (
        <div className='bg-gradient-to-r from-[#fffff] to-[#484e4c]'>
        <ProgressBar height="10px" bgcolor="#F43059"
      duration="1"></ProgressBar>
        <Navbar />
        <Outlet />
        <Footer />
        </div>
    );
};

export default Main;