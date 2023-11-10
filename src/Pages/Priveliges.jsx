import React from 'react';
import { FaTruck } from 'react-icons/fa';

const Priveliges = () => {
    return (
        <div className='bg-[#111111] flex flex-col md:flex-row md:gap-8  gap-3 rounded-sm py-8 justify-center items-center'>
            <div className='flex justify-center items-center gap-4 bg-[#303030] text-white p-8 rounded-sm'>
                <FaTruck className='text-3xl text-lime-600'></FaTruck>
                <div>
                <h2 className='text-2xl font-bold'>Quick Delivery</h2>
                <h4 className='font-semibold'>Safety ensured</h4>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4 bg-[#303030] text-white p-8 rounded-sm'>
                <FaTruck className='text-3xl'></FaTruck>
                <div>
                <h2 className='text-2xl font-bold'>Quick Delivery</h2>
                <h4 className='font-semibold'>Safety ensured</h4>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4 bg-[#303030] text-white p-8 rounded-sm'>
                <FaTruck className='text-3xl'></FaTruck>
                <div>
                <h2 className='text-2xl font-bold'>Quick Delivery</h2>
                <h4 className='font-semibold'>Safety ensured</h4>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4 bg-[#303030] text-white p-8 rounded-sm'>
                <FaTruck className='text-3xl'></FaTruck>
                <div>
                <h2 className='text-2xl font-bold'>Quick Delivery</h2>
                <h4 className='font-semibold'>Safety ensured</h4>
                </div>
            </div>
        </div>
    );
};

export default Priveliges;