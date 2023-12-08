import React from 'react';

const Featured = () => {
    const array = ['https://i.ibb.co/47qZGsk/best.png',
    'https://i.ibb.co/7VX0kjp/featured.png',
    'https://i.ibb.co/RSmzvT5/parallax.png']
    return (
        <div className='my-10'>
            <h3 className='py-10 text-center md:text-3xl text-2xl font-semibold uppercase'>Our Featured Product</h3>
           <div className='relative w-10/12 mx-auto border-2 border-indigo-500'>
            <img src='https://i.ibb.co/47qZGsk/best.png' alt="" className='absolute h-32 right-1' />
            <img src="https://i.ibb.co/7VX0kjp/featured.png" alt="" className='w-full md:h-[700px] h-[500px]' />
            </div>
        </div>
    );
};

export default Featured;