import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

const Login = () => {
    const [value, setValue] = useState()
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const phoneNumber = value
        const password = form.password.value;
        console.log(phoneNumber, password)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="md:w-7/12 mx-auto py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body p-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
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
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;