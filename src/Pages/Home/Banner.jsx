import React from "react";
import Typewriter from "typewriter-effect";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bag from "./../../assets/bag_six.png";
import watch from "./../../assets/watch_one.png";
import cosmet from "./../../assets/cosmetics_5.png";
import jwel from "./../../assets/jewellery_8.png";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <>
      <div className="relative pt-24 md:grid grid-cols-2 items-center md:gap-16 h-screen">
     
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative flex justify-center">
            <img src={bag} alt="" className="md:h-[540px] h-[320px] max-h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative flex justify-center">
            <img src={cosmet} alt="" className="md:h-[540px] h-[320px] max-h-full" />
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative flex justify-center">
            <img src={watch} alt="" className="md:h-[540px] h-[320px] max-h-full" />
            
          </div>
        </SwiperSlide>
        <SwiperSlide> 
          <div className="relative flex justify-center">
            <img src={jwel} alt="" className="md:h-[540px] h-[320px] max-h-full" />
            
          </div>
          </SwiperSlide>
      </Swiper>
      <div>
        <h3 className="uppercase text-red-800 md:text-left text-center md:text-2xl text-lg md:font-semibold mb-5">
          No Compromise In Quality
        </h3>
      <h2 className='h-20 md:text-left text-center md:text-4xl text-2xl font-bold mx-auto leading-10'>
      <Typewriter onInit={(typewriter) => {
    typewriter.typeString('Welcome to')
      .pauseFor(100)
      .typeString('<strong><span style="color:#7C3AED; text-shadow:5px 5px 5px white margin-bottom:10px"> Best One </span></strong>')
  .typeString('<strong> <span style="color:#7C3AED; text-shadow:5px 5px 5px white"><br> Cosmetics and Jewellery Corner</span></strong>')
  .pauseFor(2500)
  .deleteChars(54)
  .typeString('We Provide')
  .pauseFor(100)
  .typeString('<strong><span style="color:#7C3AED; text-shadow:5px 5px 5px white; padding-bottom:30px"></h2> Your Favorite</span></strong>')
  .typeString('<strong><span style="color:#7C3AED; text-shadow:5px 5px 5px white"><br> Cosmetics Collections Here!</span></strong>')
  .pauseFor(2500)
      .start();
  }}
  options={{
    loop: true,
  }}></Typewriter> </h2>
  <div className="flex md:justify-start justify-center items-center py-5 mt-8">
  <Link to='/allproducts'><button className="btn btn-cta">Buy Now</button></Link>
  </div>
      </div>
      </div>
    </>
  );
};

export default Banner;
