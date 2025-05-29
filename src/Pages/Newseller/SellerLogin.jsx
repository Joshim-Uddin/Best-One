import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import shopping from "./../../assets/seller.png"
import 'react-phone-input-2/lib/style.css'
import { AuthContext } from '../../Providers/AuthProviders';
import PhoneInput from 'react-phone-input-2';

const SellerLogin = () => {
    const [value, setValue] = useState()
    const [newUser, setNewUser] = useState()
    const [otp, setOtp] = useState("")
    const {sellerSignUp} = useContext(AuthContext)
    const handleSubmit = () => {
        const phoneNumber= ("+"+ value)
        sellerSignUp(phoneNumber).then((confirmationResult)=>setNewUser(confirmationResult)).catch((err)=>console.log(err));
    }
    const verifyOtp=async()=>{
        try {
            const data = await newUser.confirm(otp)
        console.log(data)
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <div className='px-20 registration flex gap-20 justify-start items-start'>
        <div className='w-3/5 relative py-16'>
        <h2 className='text-7xl font-bold text-white pt-10 leading-normal relative z-50'>Sell On <br /> Bangladesh&apos;s Top <br /> Marketplace</h2>
        <p className='text-white text-lg pt-4'>Enter our competition tand you could win US$5,000 cash, and US$5,000 shipping & marketing credits.</p>
        <img src={shopping} alt="" className='absolute -bottom-44 z-0'/>
        </div>
        <div className='bg-white rounded-xl p-8 w-2/5 mt-10'>
            <h3 className='text-xl'>Sign Up At Best One</h3>
            <p className='text-gray-400'>sign up in 2 steps</p>
           <div className='flex flex-col justify-center mt-6 gap-4'>
           <div>
           <PhoneInput country={"bd"} disableDropdown value={value} onChange={setValue} inputStyle={{width:"100%"}}/>

           <div id='recaptcha' className='w-full mt-5'></div>
         
           </div>
           <div>
          <button onClick={handleSubmit} className='btn btn-cta w-full'>Verify With SMS</button>
          </div>
           </div>
           <div className='w-full grid grid-cols-2 gap-4 mt-8'>
           <input type="text" name="otp" id="otp" onChange={(e)=>setOtp(e.target.value)} className='rounded-lg'/>
           
           <button onClick={verifyOtp} className="btn btn-cta" >Verify OTP</button>
           </div>
           <div className='text-right pr-4 pt-4'>
           <Link to="/newseller" className='text-blue-600'>Create a new account</Link>
           </div>
        </div>
    </div>
    );
};

export default SellerLogin;