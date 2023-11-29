import React from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaStar } from 'react-icons/fa';
import image_one from '../assets/user_one.png'
import image_two from '../assets/user_two.png'
import image_three from '../assets/user_three.png'

const Reviews = () => {
    return (
        <div className='bg-[#131313] py-5 text-white'>
            <h2 className=' md:text-3xl text-2xl font-semibold text-center'>What Our Client Reviews</h2>
        <div className='grid grid-cols-3 gap-5 justify-center items-center w-10/12 mx-auto my-8'>
            <div className='flex flex-col justify-center items-center'>
            <img src={image_one} alt="" className='h-24'/>
            <h3>Name</h3>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum autem dicta, consequatur adipisci ullam!</p>
            
            <Rating style={{ maxWidth: 200 }} value={4} readOnly />
        </div>
            <div className='flex flex-col justify-center items-center'>
            <img src={image_three} alt="" className='h-24'/>
            <h3>Name</h3>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum autem dicta, consequatur adipisci ullam!</p>
            
            <Rating style={{ maxWidth: 200 }} value={4} readOnly />
        </div>
            <div className='flex flex-col justify-center items-center'>
            <img src={image_three} alt="" className='h-24'/>
            <h3>Name</h3>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum autem dicta, consequatur adipisci ullam!</p>
            
            <Rating style={{ maxWidth: 200 }} value={4} readOnly />
        </div>
        </div>
        </div>
    );
};

export default Reviews;