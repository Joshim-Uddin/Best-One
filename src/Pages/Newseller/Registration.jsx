import React, { useContext, useState } from 'react';
import shopping from "./../../assets/seller.png"
import 'react-phone-input-2/lib/style.css'
import { AuthContext } from '../../Providers/AuthProviders';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
//import OtpInput from 'react-otp-input';



const Registration = () => {
    const [value, setValue] = useState()
    const [newUser, setNewUser] = useState()
    const [registrationSuccess, setRegistrationSuccess] = useState(false)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [userName, setUserName] = useState("")
    const {signUp} = useContext(AuthContext)
    const handleSubmit = (e) => {
       e.preventDefault()
               const form = e.target;
               const email = form.email.value;
               const password = form.password.value;
               console.log(email, password)
               signUp(email, password)
               .then(res=>{
                 const currentUser = res.user;
                 setRegistrationSuccess(true)
                 Swal.fire({
                   icon: 'success',
                   title: 'Signed Up Successfully!',
                   showConfirmButton: false,
                   timer: 1500
                 })
               }).catch(err => console.log(err))
               form.reset()

        // const phoneNumber= ("+"+ value)
        // sellerSignUp(phoneNumber)
        // .then((confirmationResult)=>{if(confirmationResult){setNewUser(confirmationResult)}else{ grecaptcha.reset()}})
        // .catch((err)=>console.log(err));
    }
    // const verifyOtp=async()=>{
    //     try {
    //         const data = await newUser.confirm(otp)
    //         if(data.user.phoneNumber !== null || data.user.phoneNumber !== ""){
    //             Swal.fire({
    //                 title: "Confirm",
    //                 titleText: "Seller Registration Success",
    //                 willClose: 200,
    //                 icon: "success"
    //             })
    //             setRegistrationSuccess(true)
    //         }
    //         reset()
    //     console.log(data)
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
        
    // }
    const handleUpdate = () => {
       const user = {
        phoneNumber, password
       }
    }
    return (
        <div className='px-20 registration flex gap-20 justify-start items-start'>
            <div className='w-3/5'>
            <h2 className='text-4xl font-semibold text-white pt-10'>Sign Up as a Seller on Best One</h2>
            <p className='text-white text-2xl pt-4'>Enter our competition tand you could win US$5,000 cash, and US$5,000 shipping & marketing credits.</p>
            <img src={shopping} alt="" />
            </div>
            {
                registrationSuccess ? 
                <div className='bg-white rounded-xl p-8 w-2/5 mt-10'>
                <h3 className='text-xl'>Set Up Account</h3>
               <div className='flex flex-col justify-center mt-6 gap-4'>
               <div className='flex flex-col'>
                <input type="text" name="name" id="name" onChange={setUserName} placeholder='Enter your name' />
                <input type="text" name="brand" id="brand" placeholder='Enter your brand name'/>
                <input type="file" name="image" id="image" placeholder='Upload Image' />
               </div>
               <div>
              <button onClick={handleUpdate} className='btn btn-cta w-full'>Update Account</button>
              </div>
               </div>
               {/* <div className='w-full grid grid-cols-2 gap-4 mt-8'>
               <input type="text" name="otp" id="otp" onChange={(e)=>setOtp(e.target.value)} className='rounded-lg'/>
               
               <button className="btn btn-cta" >Verify OTP</button>
               </div> */}
               <div className='text-right pr-4 pt-4'>
               <Link to="/newseller/sellerlogin" className='text-blue-600'>Login In</Link>
               </div>
            </div>
            :
            <div className='bg-white rounded-xl p-8 w-2/5 mt-10'>
                <h3 className='text-xl'>Sign Up At Best One</h3>
                <p className='text-gray-400'>sign up in 2 steps</p>
               <div className='flex flex-col justify-center mt-6 gap-4'>
               <div>
               <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <input className='rounded-md' type="email" name="email" id="email" placeholder='Enter Email Address'/>
                <input className='rounded-md' type="password" name="password" id="password" placeholder='Enter Password'/>
                <input className='rounded-md btn btn-secondary' type="submit" value="Sign Up" />
               </form>
  
               <div id='recaptcha' className='w-full mt-5'></div>
             
               </div>
               {/* <div>
              <button onClick={()=>handleSubmit(e)} className='btn btn-cta w-full'>Sign Up</button>
              </div> */}
               </div>
               <div className='text-right pr-4 pt-4'>
               <Link to="sellerlogin" className='text-blue-600'>Log In</Link>
               </div>
            </div>
            }
        </div>
    );
};

export default Registration;