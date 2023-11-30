import React from 'react';
import Banner from './Banner';
import Products from './Products';
import Reviews from '../../Components/Reviews';
import Priveliges from '../../Components/Priveliges';
import Sponsors from '../../Components/Sponsors';
import Youtube from '../../Components/Youtube';
import Featured from '../../Components/Featured';



const Home = () => {
    return (
  <>
   <Banner />
   <Priveliges />
   <Products />
    <Youtube />
   <Reviews />
   <Featured />
   <Sponsors />
  
</>
    );
};

export default Home;