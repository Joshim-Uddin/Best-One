import React from 'react';
import Banner from './Banner';
import Products from './Products';
import Reviews from '../../Components/Reviews';
import Priveliges from '../../Components/Priveliges';



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