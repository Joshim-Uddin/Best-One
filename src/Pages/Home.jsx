import React from 'react';
import Typewriter from 'typewriter-effect';


const Home = () => {
    return (
  <div className='text-violet-600 py-5'>
    <h2 className='text-center md:text-5xl text-2xl font-bold w-10/12 mx-auto'>
      <Typewriter onInit={(typewriter) => {
    typewriter.typeString('Welcome to')
      .pauseFor(100)
      .typeString('<strong><span style="text-shadow:5px 5px 5px white"> Best One </span></strong>')
  .typeString('<strong> <span style="color: #ffffff; text-shadow:5px 5px 5px grey"><br> Cosmetics and Jewellery Corner</span></strong>')
  .pauseFor(2500)
  .deleteChars(28)
  .typeString('<strong><span style="color: #ffffff; text-shadow:5px 5px 5px grey"> Unique Collections Here!</span></strong>')
  .pauseFor(2500)
      .start();
  }}
  options={{
    loop: true,
  }}></Typewriter> </h2>
  <div className='h-screen'></div>
  <div className='h-screen'></div>
  <div className='h-screen'></div>
</div>
    );
};

export default Home;