import React, { useContext, useEffect, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import Lottie from "lottie-react";
// import groovyWalkAnimation from "./groovyWalk.json";
import animation from "/public/animation_ll8r84nh.json"
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [value, setValue] = useState()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.pathname || '/'
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const phoneNumber = value
        const password = form.password.value;
        console.log(phoneNumber, password)
        if(phoneNumber && password) {
            navigate('/home', {replace: true})
        }
                
        setValue('')
        form.reset()
    }
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 items-center md:gap-2 md:w-10/12 mx-auto'>
        <Lottie animationData={animation} className='md:h-2/3' ></Lottie>
        <div className="hero">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body p-4">
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-violet-600">Phone Number</span>
          </label>
          <PhoneInput
          className="input input-bordered"
          defaultCountry='BD'
          international
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-violet-600">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-violet-600">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-white">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>

        </div>
    );
};

export default Login;