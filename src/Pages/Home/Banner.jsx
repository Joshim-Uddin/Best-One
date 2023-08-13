import React from 'react';
import Typewriter from 'typewriter-effect';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bag from "./../../assets/bag_six.png"
import watch from "./../../assets/watch_one.png"
import cosmet from "./../../assets/cosmetics_5.png"
import jwel from "./../../assets/jewellery_8.png"

const Banner = () => {
    
        
      
    return (
        <div  className='max-h-screen mx-auto text-violet-600 py-5 grid md:grid-cols-2 grid-cols-1 gap-5 items-center justify-between'>
             <h2 className='text-center md:text-5xl text-2xl font-bold w-10/12 mx-auto'>
      <Typewriter onInit={(typewriter) => {
    typewriter.typeString('Welcome to')
      .pauseFor(100)
      .typeString('<strong><span style="text-shadow:5px 5px 5px white"> Best One </span></strong>')
  .typeString('<strong> <span style="color: #ffffff; text-shadow:5px 5px 5px grey"><br> Cosmetics and Jewellery Corner</span></strong>')
  .pauseFor(2500)
  .deleteChars(30)
  .typeString('<strong><span style="color: #ffffff; text-shadow:5px 5px 5px grey"> Unique Collections Here!</span></strong>')
  .pauseFor(2500)
      .start();
  }}
  options={{
    loop: true,
  }}></Typewriter> </h2>
<div>
<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={{ clickable: true }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
        className="mySwiper w-3/12"
      >
        <SwiperSlide className='w-full h-1/2'>
          <img src={bag}  className='w-3/4 mx-auto' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={watch}  className='w-3/4 mx-auto'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cosmet}  className='w-3/4 mx-auto'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={jwel}  className='w-3/4 mx-auto'/>
        </SwiperSlide>
      </Swiper>
</div>
        </div>
    );
};

export default Banner;