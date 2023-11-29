import React from 'react';
import { FaHandHoldingUsd, FaTruck } from 'react-icons/fa';
import {LiaCertificateSolid} from 'react-icons/lia'
import {TbTruckReturn} from 'react-icons/tb'

const Priveliges = () => {
    return (
        <div className='bg-[#111111] flex flex-col md:flex-row md:gap-8  gap-3 rounded-sm py-10 justify-center items-center my-8'>
            <div className='flex justify-center items-center gap-4 bg-[#303030] text-white p-10 rounded-sm'>
                <FaTruck className='text-3xl text-lime-600'></FaTruck>
                <div>
                <h2 className='text-2xl font-bold'>Quick Delivery</h2>
                <h4 className='font-semibold mt-3'>Safety ensured</h4>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4 bg-[#303030] text-white p-10 rounded-sm'>
                <LiaCertificateSolid className='text-3xl text-lime-600'></LiaCertificateSolid>
                <div>
                <h2 className='text-2xl font-bold'>Certifed Quality</h2>
                <h4 className='font-semibold mt-3'>Authority tested</h4>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4 bg-[#303030] text-white p-10 rounded-sm'>
                <FaHandHoldingUsd className='text-3xl text-lime-600'></FaHandHoldingUsd>
                <div>
                <h2 className='text-2xl font-bold'>Saving Assured</h2>
                <h4 className='font-semibold mt-3'>At lower cost</h4>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4 bg-[#303030] text-white p-10 rounded-sm'>
                <TbTruckReturn className='text-3xl text-lime-600'></TbTruckReturn>
                <div>
                <h2 className='text-2xl font-bold'>Standard Return</h2>
                <h4 className='font-semibold mt-3'>Easy to return</h4>
                </div>
            </div>
        </div>
    );
};

export default Priveliges;