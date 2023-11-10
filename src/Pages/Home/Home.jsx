import React from 'react';
import Banner from './Banner';
import Products from './Products';
import Reviews from '../Reviews';
import Priveliges from '../Priveliges';



const Home = () => {
    return (
  <>
   <Banner />
   <Priveliges />
   <Products />

   <Reviews />
  
</>
    );
};

export default Home;