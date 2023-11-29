import React from 'react';
import Banner from './Banner';
import Products from './Products';
import Reviews from '../../Components/Reviews';
import Priveliges from '../../Components/Priveliges';
import Sponsors from '../../Components/Sponsors';



const Home = () => {
    return (
  <>
   <Banner />
   <Priveliges />
   <Products />

   <Reviews />
   <Sponsors />
  
</>
    );
};

export default Home;