import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import image_one from '../assets/user_one.png'
import image_two from '../assets/user_two.png'
import image_three from '../assets/user_three.png'

const Reviews = () => {
    return (
        <div className='bg-[#303030] py-10'>
            <h2 className=' md:text-3xl text-2xl font-semibold text-center text-white'>What Our Client Reviews</h2>
        <div className='grid md:grid-cols-3 gap-8 justify-center items-center w-10/12 mx-auto my-8 '>
            <div className='flex flex-col gap-3 justify-center items-center bg-slate-100 p-5 rounded-md shadow-md'>
            <Rating style={{ maxWidth: 180 }} value={4} readOnly />
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum autem dicta, consequatur adipisci ullam!</p>
           <div className='flex justify-center gap-5 items-center'>
           <img src={image_one} alt="" className='h-20 rounded-full'/>
            <h3 className='text-xl font-semibold'>Name</h3>
           </div>
            
        </div>
            <div className='flex flex-col gap-3 justify-center items-center bg-slate-100 p-5 rounded-md shadow-md'>
            <Rating style={{ maxWidth: 180 }} value={4} readOnly />
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum autem dicta, consequatur adipisci ullam!</p>
           <div className='flex justify-center gap-5 items-center'>
           <img src={image_one} alt="" className='h-20 rounded-full'/>
            <h3 className='text-xl font-semibold'>Name</h3>
           </div>
            
        </div>
            <div className='flex flex-col gap-3 justify-center items-center bg-slate-100 p-5 rounded-md shadow-md'>
            <Rating style={{ maxWidth: 180 }} value={4} readOnly />
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum autem dicta, consequatur adipisci ullam!</p>
           <div className='flex justify-center gap-5 items-center'>
           <img src={image_one} alt="" className='h-20 rounded-full'/>
            <h3 className='text-xl font-semibold'>Name</h3>
           </div>
            
        </div>
            
            
        </div>
        </div>
    );
};

export default Reviews;