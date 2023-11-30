import React from 'react';

const Featured = () => {
    const array = ['https://i.ibb.co/47qZGsk/best.png',
    'https://i.ibb.co/7VX0kjp/featured.png',
    'https://i.ibb.co/RSmzvT5/parallax.png']
    return (
        <div>
            <h3>Our Featured Product</h3>
           <div className='relative'>
            <img src='https://i.ibb.co/47qZGsk/best.png' alt="" className='absolute h-28' />
            <img src="https://i.ibb.co/7VX0kjp/featured.png" alt="" className='w-full' />
            </div>
        </div>
    );
};

export default Featured;