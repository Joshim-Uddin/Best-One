import React, { useContext, useEffect, useState } from 'react';
//import 'react-phone-number-input/style.css'
import Lottie from "lottie-react";
// import groovyWalkAnimation from "./groovyWalk.json";
import animation from "/public/animation_ll8r84nh.json"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import Swal from 'sweetalert2';


const Login = () => {
  const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.pathname || '/'
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value;
      login(email, password).then((result)=>{
        const user = result.user
        Swal.fire({
          title: "Login Successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          showCloseButton: false
        });
        navigate(from, {replace: true})
      }).catch((error)=>console.log(error))
        
        form.reset()
    }
    return (
      <>
        <div className='grid md:grid-cols-2 grid-cols-1 items-center md:gap-2 md:w-10/12 mx-auto'>
        <Lottie animationData={animation} className='md:h-1/2' ></Lottie>
        <div className="hero">
  <div className="hero-content flex-col w-3/5">
    <div className="text-center">
      <h1 className="text-3xl font-bold">Sign In</h1>
    </div>
    <div className="card w-full shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body p-4">
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-violet-600">Email</span>
          </label>
          <input className="input input-bordered" type="email" name="email" id="email" placeholder='Input Email' />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-violet-600">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
        </div>
        <div>
          <input type="checkbox" name="remember" id="remember" />
          <span className='ms-2'>Remember Me</span>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-white">Sign In</button>
        </div>
          <div className='flex justify-between'>
            <label className="label">
            <a href="#" className="label-text-alt link link-hover text-violet-600">Forgot password?</a>
          </label>
          <label className="label">
            <span className="label-text-alt text-violet-600">Don&apos;t have an account? 
            <Link className='link link-hover ms-2' to='/signup'>Sign Up</Link></span>
          </label>
          </div>
      </form>
    </div>
  </div>
</div>

        </div>
        </>
    );
};

export default Login;