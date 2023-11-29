import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import animation from "/public/animation_ll8r84nh.json"
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {signUp} = useContext(AuthContext)
    
    const handleSignUp=(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signUp(email, password)
        .then(res=>{
          const currentUser = res.user;
          Swal.fire({
            icon: 'success',
            title: 'Signed Up Successfully!',
            showConfirmButton: false,
            timer: 1500
          })
        }).catch(err => console.log(err))
        form.reset()
    }
    return (
        <>
        <div className='grid md:grid-cols-2 grid-cols-1 items-center md:gap-2 md:w-10/12 mx-auto'>
        <Lottie animationData={animation} className='md:h-1/2' ></Lottie>
        <div className="hero">
  <div className="hero-content flex-col w-2/3">
    <div className="text-center">
      <h1 className="text-3xl font-bold">Sign Up</h1>
    </div>
    <div className="card w-full shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body p-4">
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
        <div className="form-control mt-6">
          <button className="btn btn-primary text-white">Sign Up</button>
        </div>
          <div className='flex justify-between'>
            <label className="label">
            <a href="#" className="label-text-alt link link-hover text-violet-600">Forgot password?</a>
          </label>
          <label className="label">
            <span className="label-text-alt text-violet-600">Already have an account? 
            <Link className='link link-hover ms-2' to='/login'>Sign In</Link></span>
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

export default SignUp;