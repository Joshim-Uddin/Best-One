import React, { useState } from 'react';
import shopping from "./../../assets/seller.png"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input/input';
import { isSupportedCountry } from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';

const Registration = () => {
    const [value, setValue] = useState()
    console.log(isSupportedCountry("BD")===true)
    return (
        <div className='px-20 registration flex gap-20 justify-start items-start'>
            <div className='w-3/5'>
            <h2 className='text-4xl font-semibold text-white pt-10'>Sign Up as a Seller on Best One</h2>
            <p className='text-white text-2xl pt-4'>Enter our competition tand you could win US$5,000 cash, and US$5,000 shipping & marketing credits.</p>
            <img src={shopping} alt="" />
            </div>
            <form className='bg-white rounded-xl p-4 w-2/5 mt-10'>
                <h3 className='text-xl'>Sign Up At Best One</h3>
                <p className='text-gray-400'>sign up in 2 steps</p>
               <div>
               <PhoneInput
               flags={flags}
               international
      placeholder="xxxxx-xxxxxx"
      defaultCountry='BD'
      value={value}
      onChange={setValue} className="rounded-md"/>
  
               <span></span>
               </div>
            </form>
        </div>
    );
};

export default Registration;