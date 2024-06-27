import React from 'react';
import Registration from './Registration';

const NewSeller = () => {
    return (
        <>
            <nav className='bg-white shadow-md px-10 py-2'>
                <h2 className='text-[#fe5418] text-4xl font-bold'>Best One <span><br />Seller Center</span></h2>
            </nav>
            <div>
                <Registration />
            </div>
        </>
    );
};

export default NewSeller;